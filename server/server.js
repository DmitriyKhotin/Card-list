const express = require('express')
const bodyParser = require('body-parser');
const data = require('./data')
const { filterData, sortData } = require('./parser')
const PORT = 3000;

const app = express();
let sortedAndFiltered = data

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Headers","Content-Type")
  next()
})

app.use(express.json());


app.get('/', async (requst, response) => {
  const { url, query } = requst;
  const { sort, ...filter } = query;

  if (!Object.keys(query).length) {
    response.send({
      credits: data.slice(0, 10),
      count: data.length
    });
    return
  }
  console.log(sort)
  console.log(filter)
  let array = data;

  if (Object.entries(filter).length > 0 || sort) {

    array = filterData(filter)

    sortedAndFiltered = sortData(sort, array)

    response.send({
      credits: sortedAndFiltered.slice(0, 10),
      count: sortedAndFiltered.length
    })
    return
  } else {
    sortedAndFiltered = data
    response.status(400).json({message: 'Неправильный запрос'})
  }
})

app.post('/', async (requst, response) => {
  const { url, body } = requst;
  console.log(requst.body)
  if (url === '/' && body && body.to <= data.length) {
    response.send(sortedAndFiltered.slice(body.from, body.to))
    return
  } else {
    sortedAndFiltered = data
    response.status(400).json({message: 'Неправильный запрос'})
  }
})

app.get('/programs/:alias', async (requst, response) => {
  const { params: { alias }, query} = requst;
  // TODO: сделать проверку alias на существование - если нет, то 404
  const credit = data.find((value) => {
    if (value.alias === alias) {
      return value
    }
  })

  if (credit) {
    response.send(credit)
    return
  } else {
    response.status(400).json({message: 'Неправильный запрос'})
  }
})

app.listen(PORT, () => {
  console.log(`Server was started ar port ${PORT}`)
})
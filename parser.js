const data = require('./data')

const filterData = (filter) => {
  if (Object.entries(filter).length > 0) {

    // фильтры
    const creditAmount = Number(filter.creditAmount)
    if (creditAmount) {
      return data.filter((credit) => credit.rate.creditAmount.from <= creditAmount)
    }

  }

  return data;
}

const sortData = (sort, array) => {
  switch (sort) {
    // сортировки
    case'minRate':
      return array.sort((a, b) => a.rate.periods[0].rate.from - b.rate.periods[0].rate.from);

    case 'maxRate':
      return array.sort((a, b) => (a.rate.periods[0].rate.from) - a.rate.periods[0].rate.from).reverse();

    case 'creditAmount.from':
      return array.sort((a, b) => a.rate.creditAmount.from - b.rate.creditAmount.from)

    default:
      return array
  }
}

module.exports = {
  filterData,
  sortData
}
const queryParams = new URLSearchParams(document.location.search);

queryParams.forEach((value, key) => {
  console.warn(`Get HARDCODED PARAMS ${key} = ${value}`);
})

export const getHardcodedParam = (key: string) => {
  return queryParams.get(key);
}
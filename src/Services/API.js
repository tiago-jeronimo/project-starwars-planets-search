const getApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchUrl = await fetch(url);
  const result = await fetchUrl.json();
  return result;
};
export default getApi;

function getDataApi() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}

export default getDataApi;

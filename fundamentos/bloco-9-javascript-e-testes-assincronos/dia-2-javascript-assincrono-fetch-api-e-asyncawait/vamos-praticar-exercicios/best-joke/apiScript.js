// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";

const printJoke= (data) => {
  const joke = document.querySelector("#jokeContainer");
  joke.innerHTML = data;
}

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => printJoke(data.joke));
};

window.onload = () => fetchJoke();

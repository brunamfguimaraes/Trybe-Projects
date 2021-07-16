const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch('https://icanhazdadjoke.com/', myObject)
  .then(response => response.json())
  .then(data => {
    const piada = data.joke;
    appendJoke(`Hello, listen this: ${piada}`);
  });
  };


window.onload = () => fetchJoke();

function appendJoke(joke) {
  const h5 = document.createElement('h5');
  const inDocument = document.getElementById('jokeContainer');
  h5.innerText = joke;
  inDocument.appendChild(h5);
};


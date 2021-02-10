const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch('https://icanhazdadjoke.com/', myObject)
  .then(response => response.json())
  .then(data => console.log(data));
};


//window.onload = () => fetchJoke();




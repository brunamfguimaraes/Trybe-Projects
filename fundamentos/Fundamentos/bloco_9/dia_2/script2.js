
const randomNumbers = () => {
  const arrayRandomNumbers = [ 1, 3, 5, 10, 20, 15, 30, 40, 47, 31];
  const numerosAoQuadrado = arrayRandomNumbers.map(number =>  number * number )
  const somaDeTodosOsNumers = numerosAoQuadrado.reduce((resultado, numero) => resultado + numero);
  return new Promise((resolve, reject) => {
    if (somaDeTodosOsNumers < 2000) {
      resolve(somaDeTodosOsNumers)
    } else {
      reject(somaDeTodosOsNumers)
    }
  })
  .then(() => console.log(`parabéns, fera ${somaDeTodosOsNumers}`))
  .catch(() => console.log(`Promise rejeitada ${somaDeTodosOsNumers}`))
}

console.log(randomNumbers());
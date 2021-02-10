const assert = require('assert');

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
 } 
 //console.log(myRemove([1, 2, 3, 4], 3));

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ], "fsfsffsf");
assert.notDeepStrictEqual(([1, 2, 3, 4], 3), [1, 2, 3, 4], "dasdadasdad");
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "fsfsffsf");



/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
3-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
4-Verifique se o array passado por parâmetro não sofreu alterações
5-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */
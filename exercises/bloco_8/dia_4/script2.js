const assert = require('assert')

// escreva sum abaixo
const sum = (...outrosValores) => { 
  let sumAll = 0;
  for (valor of outrosValores) sumAll += valor
  return sumAll;
};
    
assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)

/* Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. 
Ou seja:
Dica: use parâmetro rest  */
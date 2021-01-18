const assert = require('assert');

const sum = (a, b) => {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   throw new Error('parameters must be numbers');
  // }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(4, 5), 9, 'o resultado deve ser 9');
assert.strictEqual(sum(0, 0), 0);
assert.notStrictEqual (sum(4, 5), 9, 'mensagem de erro');
// notStrictEqual



// Praticando a implementação de testes


// Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
// Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.
// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
// 2. Teste se o retorno de sum(4, 5) é 9
// 3. Teste se o retorno de sum(0, 0) é 0
// 4. Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// 5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

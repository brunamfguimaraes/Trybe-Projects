
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.split('').reduce((valorInicial, valorAtual) => {
    if (valorInicial === 'a' || 'A' && valorAtual === 'a' || 'A') {
     console.log(valorAtual);
     return valorAtual;
       }
      return valorInicial;
    })
  }

assert.deepStrictEqual(containsA(), 20);

//5-Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

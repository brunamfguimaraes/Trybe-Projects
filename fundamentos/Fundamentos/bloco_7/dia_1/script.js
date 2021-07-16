/* var ifScope = (`Não devo ser utilizada fora do meu escopo (if)`);
var elseScope = (`Não devo ser utilizada fora meu escopo (else)`);
      const testingScope = (escopo) => { 
        if (escopo === true) { 
          ifScope = (`${ifScope} ótimo, fui utilizada no escopo !`);
          console.log(ifScope);
        } else {
          console.log(elseScope);
        }
        // Se necessário esta linha pode ser removida.
      }

      testingScope(false); */

/* 
1-Faça as modificações necessárias na função para que o seu comportamento 
respeite o escopo no qual cada variável foi declarada.
2-Modifique a estrutura da função para que ela seja uma arrow function .
3-Modifique as concatenações para template literals . */





/* const oddsAndEvens = [21, 12, 10, 1, 3, 5];

    oddsAndEvens.sort(function(a,b) {
       return a-b; 
})

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!.`);

 */


/* 2 -Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
*Utilize template literals para que a chamada console.log(oddsAndEvens); 
retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
*Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
Spoiler: É possível realizar uma função que ordene qualquer array de números. */



/* 1- Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.
2 -Crie uma função que receba uma frase e retorne qual a maior palavra.
 */

 let fatoriaal = () => {
   let resultado = fatoriaal;
   for (index = 1; index < fatoriaal; index += 1) {
      resultado *= [index];
    }    
    };  console.log(fatoriaal(5));
  
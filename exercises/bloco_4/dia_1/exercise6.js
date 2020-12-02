/*let cavalo = 'movimento em L';
let rei = 'apenas uma casa';
let rainha = 'sem restrições';
let torre = 'sem restrições de casas: frente, trás, direita e esquerda';
let bispo = 'sem restições de casas: diagonal';
let peao = 'apenas movimentos frontais';

if (cavalo) {
    console.log('movimento em L');
} else if (rei) {
    console.log ('apenas uma casa')
} else if (rainha) {
    console.log ('sem restrições')
} else if (torre) {
    console.log('sem restrições de casas: frente, trás, direita e esquerda')
} else if (bispo) {
    console.log('sem restições de casas: diagonal')
} else if (peao) {
    console.log('apenas movimentos frontais')
} else {
    console.log('Default')
};

console.log(boi);*/


let movimentosXadrez = 'cavalo'.toUpperCase();

switch (movimentosXadrez) {
    case 'cavalo':
        console.log('movimento em L');
        break;
    case 'rei':
        console.log('apenas uma casa');
        break;
    case 'rainha':
        console.log('sem restrições');
        break;
    case 'torre':
        console.log('sem restrições de casas: frente, trás, direita e esquerda');
        break;
    case 'bispo':
        console.log('sem restições de casas: diagonal');
    case 'peao':
        console.log('apenas movimentos frontais');
        break;

        default:
        console.log('erro');
}
function encode(resultado) {
  for (let index = 0; index < resultado.length; index += 1) {
  if (resultado[index] === 'a') {
      resultado = resultado.replace('a', 1);
   } else if (resultado[index] === 'e') {
   resultado = resultado.replace('e', 2);
  } else if (resultado[index] === 'i') {
   resultado = resultado.replace('i', 3);
  } else if (resultado[index] === 'o') {
   resultado = resultado.replace('o', 4);
  } else if (resultado[index] === 'u') {
   resultado = resultado.replace('u', 5);
  }
}
  return resultado;
}

function decode(result) {
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === '1') {
      result = result.replace('1', 'a');
    } else if (result[i] === '2') {
    result = result.replace('2', 'e');
  } else if (result[i] === '3') {
    result = result.replace('3', 'i');
  } else if (result[i] === '4') {
    result = result.replace('4', 'o');
  } else if (result[i] === '5') {
    result = result.replace('5', 'u');
  }
}
  return result;
}

const functions = { encode, decode };
module.exports = functions;
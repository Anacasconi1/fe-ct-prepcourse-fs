function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var newArray = []
  for(number of numeros){
    if (number % 2 == 0){
      newArray.push(number);
    }
    else {
      continue
    }
  } 
  return newArray.length
}


console.log(contarParesConContinue([2, 6, 89, 3, 45, 10, 8, 76]))
module.exports = contarParesConContinue;

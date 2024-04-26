function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var includer = [];
  for (numero of numeros){
    if (includer.includes(numero)){
      return numero
    }
    includer.push(numero);
  }
}

console.log(encontrarElementoRepetido([5, 7, 8, 3, 5]))

module.exports = encontrarElementoRepetido;
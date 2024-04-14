function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var newArray = array.map((element) => element * array.indexOf(element))
  return newArray
}

console.log(multiplicarElementosPorIndice([5, 23, 7, 10]))

module.exports = multiplicarElementosPorIndice;

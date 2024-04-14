function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var bigger =  Math.max.apply(null, array)
  return array.indexOf(bigger)
}

console.log(encontrarIndiceMayor([12, 5, 64, 23, 8, 2, 4]))

module.exports = encontrarIndiceMayor;

function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length == 0) return 0
  var bigger =  Math.max.apply(null, array)
  return array.indexOf(bigger)
  
}

console.log(encontrarIndiceMayor([]))

module.exports = encontrarIndiceMayor;

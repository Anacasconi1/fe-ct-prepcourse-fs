function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let newArray = array.filter((element) => element % 2 == 0)
  return newArray
}

console.log(filtrarNumerosPares([5, 4, 3, 45, 62, 8]))
module.exports = filtrarNumerosPares;

function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let newArray = array.filter((element) => element > 10)
  return newArray.length

}

console.log(contarElementosMayoresA10([12, 5, 64, 23, 8, 2, 4]))
module.exports = contarElementosMayoresA10;

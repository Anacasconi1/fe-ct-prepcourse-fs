function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var reduced = resultadosTest.reduce((a, b) => a + b);
  var total = reduced / resultadosTest.length
  return total
}

console.log(promedioResultadosTest([10, 5, 2.3, 9, 6.7]))

module.exports = promedioResultadosTest;

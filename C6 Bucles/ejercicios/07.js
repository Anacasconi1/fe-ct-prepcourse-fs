function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  while (a % 2 == 0 && a % 3 == 0){
    return true
  }
  return false
}

console.log (esParYDivisiblePorTres (2))
module.exports = esParYDivisiblePorTres;
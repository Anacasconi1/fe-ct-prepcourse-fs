function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var a = 0
  while (numero > 0 && a < numero){
    a++
    if (a ** 2 == numero){
      return true
    }
  }
  return false
}
console.log(esPotenciaDeDos(2))

module.exports = esPotenciaDeDos;

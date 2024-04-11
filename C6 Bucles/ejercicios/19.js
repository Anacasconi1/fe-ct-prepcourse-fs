function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var count = 0
  for (var i = 0 ; i <= n; i++){
    count = i + count
  }
  return count
}

console.log(sumarHastaN(4))
module.exports = sumarHastaN;

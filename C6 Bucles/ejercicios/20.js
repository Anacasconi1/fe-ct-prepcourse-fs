function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var count = 0
   for (var i = 0 ; i <= n; i++){
      count = i + count
      if (count >= 100){
         break
      }
  }
  return count
}

console.log(sumarHastaNConBreak(60))
module.exports = sumarHastaNConBreak;

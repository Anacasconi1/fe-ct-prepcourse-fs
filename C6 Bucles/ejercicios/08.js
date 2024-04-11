function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   while (a > 0 && a < 10){
      return true
   }
   return false
}

console.log(esPositivoOInferiorA10(8))

module.exports = esPositivoOInferiorA10;

function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (i of secuencia){
    if ( i % n == 0){
      var multiplo = i
      break
    }
    
  }
  return multiplo
}

console.log(encontrarPrimerMultiploDeN(2, [5, 4, 7, 1, 8]))

module.exports = encontrarPrimerMultiploDeN;

//una manera mas facil de hacerlo:
 // var finder = secuencia.find((element)=> element%n== 0)
 // return finder
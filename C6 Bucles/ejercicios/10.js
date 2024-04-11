function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  while (num == 10 || num == 5){
    return true
  }
  return false
}

console.log(esDiezOCinco(10))
module.exports = esDiezOCinco;

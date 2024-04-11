function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var number = num.toString()
  while (number.length > 3){
    return true
  } 
  return false
}

console.log(tieneTresDigitos(2))

module.exports = tieneTresDigitos;

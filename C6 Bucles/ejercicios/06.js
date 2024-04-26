function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  var numero = num.toString()
  while (numero.length == 3){
    return true
  } 
  return false

}

console.log(tieneTresDigitos(45))

module.exports = tieneTresDigitos;

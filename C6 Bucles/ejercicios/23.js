function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var count = 2;
  if (numero == 2){
    return false
  }
  while (count < numero){ 
    if (numero % count === 0){
      return false;
    }
    count ++;
  }
  return true ; 
}

console.log(esNumeroPrimo(21))
module.exports = esNumeroPrimo;

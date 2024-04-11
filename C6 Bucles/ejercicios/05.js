function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  while (valor == true){
    return "Soy verdadero"
  }
  return "Soy falso"
}

console.log(esVerdadero())
module.exports = esVerdadero;

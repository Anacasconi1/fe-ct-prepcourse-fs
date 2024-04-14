function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  for (var min = numeros[0]; min <= numeros.length; min ++){
    //for(numero of numeros){
      if (!min == numeros){
        return 
      }
      //else{
      //  return null
      //}
      //}
  }
  if (numeros.length == 0){
    return null
  }
  

}
console.log(encontrarNumeroFaltante([6, 7, 9, 10, 11]))
module.exports = encontrarNumeroFaltante;
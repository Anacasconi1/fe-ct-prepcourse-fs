function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var total = arrayOfNums.reduce((a, b)=> a + b)  
  return total
}

console.log(agregarNumeros([5, 23, 4, 2]))
module.exports = agregarNumeros;

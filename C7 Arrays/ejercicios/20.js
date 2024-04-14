function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var everyone = array.every ((element)=>  element === array[0])
  return everyone 
}

console.log(todosIguales([6, 6, 6, 6]))
module.exports = todosIguales;

function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArray = array.map((element) => element.toUpperCase())
  return newArray
  
}

console.log(convertirStringAMayusculas(["araña", "mana", "tela"]))
module.exports = convertirStringAMayusculas;

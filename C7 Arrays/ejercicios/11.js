function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let newArray = array.map((element)=> element*2)
  return newArray
}

console.log(duplicarElementos([2, 7, 9, 6]))
module.exports = duplicarElementos;

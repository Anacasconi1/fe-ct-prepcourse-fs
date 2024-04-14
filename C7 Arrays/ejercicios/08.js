function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   var finder = array.find((num)=> num)
   if (finder){
      return array.indexOf(num)
   }
   return -1
}

console.log(encontrarElemento(5, [1, 5, 7, 9, 8]))
module.exports = encontrarElemento;


function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   var randomElement = Math.floor(Math.random()* array.length)
   return array [randomElement]
}

console.log(obtenerElementoAleatorio(["banana", "manzana", "pera", "mandarina", "melon"]))

module.exports = obtenerElementoAleatorio;

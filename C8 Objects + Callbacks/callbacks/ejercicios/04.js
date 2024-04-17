function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   const count = 0
   var reduced = arrayOfNumbers.reduce((elements, element) => elements + element, count );
   return cb(reduced)
}
function other (result){
   return
}

console.log(sumarArray([1, 2, 3, 4, 5], other))
module.exports = sumarArray;

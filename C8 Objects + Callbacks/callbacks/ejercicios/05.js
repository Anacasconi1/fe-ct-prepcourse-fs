function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  array.forEach(element => {
    cb(element)
  });
}
function anything (value){
  return value
}

console.log(forEach ([1, 2, 3, 4, 5], anything))
module.exports = forEach;

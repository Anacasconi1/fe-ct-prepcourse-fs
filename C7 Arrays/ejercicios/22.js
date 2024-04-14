function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var array = [];
  var divisor = 0;
  while (divisor <= 10){
    array.push(6*divisor);
    divisor ++;
  }
  return array

}

console.log(tablaDelSeis())
module.exports = tablaDelSeis;

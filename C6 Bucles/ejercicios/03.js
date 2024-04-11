function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  while (Number.isInteger(x) && Number.isInteger(y)){
    if (x < y){
      return y
    }
    else if (x > y){
      return x
    }
    else if (x == y){
      return x || y
    }
  }

}

console.log(obtenerMayor(1.2, 8))
module.exports = obtenerMayor;

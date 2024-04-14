function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let founder = array.find((element)=> element.length >= 5);
  return founder
}
console.log(obtenerPrimerStringLargo(["lago", "rio", "karate", "municion"]))
module.exports = obtenerPrimerStringLargo;

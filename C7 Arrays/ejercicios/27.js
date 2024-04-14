function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var newString = palabras.join(" ")
  return newString
}

console.log(dePalabrasAFrase(["Hola", "Mundo", "Manda"]))
module.exports = dePalabrasAFrase;

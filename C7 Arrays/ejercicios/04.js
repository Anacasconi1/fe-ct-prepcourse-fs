function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento)
  return array
}

console.log(agregarItemAlFinalDelArray(["Namjoong", "jungkook", "jimin", "v", "j-hope", "suga"], "jin"))

module.exports = agregarItemAlFinalDelArray;

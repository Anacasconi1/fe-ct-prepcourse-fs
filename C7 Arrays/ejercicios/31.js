function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var splitted = texto.split("");
  var reversed = splitted.reverse()
  var joined = reversed.join("")
  return joined
}

console.log(invertirTexto("mandioca"))

module.exports = invertirTexto;

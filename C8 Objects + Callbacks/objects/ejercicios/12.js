var myObject = {
  numeroMisterioso : 2,

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  for (property in objetoMisterioso){
    return objetoMisterioso[property] *5
  }
}

console.log(multiplicarNumeroDesconocidoPorCinco(myObject))
module.exports = multiplicarNumeroDesconocidoPorCinco;

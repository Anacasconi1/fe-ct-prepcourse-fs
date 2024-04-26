function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var newArray = []
  var filtered = array.find((element)=> element == "Enero" );
  var filtered2 = array.find((element)=> element == "Marzo" );
  var filtered3 = array.find((element)=> element == "Noviembre" );
  newArray.push(filtered, filtered2, filtered3)
  if(!filtered||!filtered2||!filtered3){
    return "No se encontraron los meses pedidos"
  }
  return newArray
}

console.log(mesesDelAño(["junio", "mayo", "Marzo"]))
module.exports = mesesDelAño;

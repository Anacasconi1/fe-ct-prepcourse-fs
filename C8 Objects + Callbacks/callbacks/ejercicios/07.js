function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var filtered = arrayOfStrings.filter ((element) => element.startsWith("a") || element.startsWith("A"))
   return filtered
}

console.log(filter(["Mana", "Ana", "año", "pala"]))
module.exports = filter;

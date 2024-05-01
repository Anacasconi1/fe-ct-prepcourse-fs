/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var newArray = []
  for(var array in objeto){
    newArray.push([array, objeto[array]])
  }
  return newArray
}
//console.log(deObjetoAarray({D: 1, B: 2, C: 3}))


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var newObject = {};
  var splittedAndSorted = string.split('').sort()
  for (var prop of splittedAndSorted){
    if (newObject[prop]){
      newObject[prop]++;
    } else {
      newObject[prop] = 1;
    }
  }
  return newObject
}
//console.log(numberOfCharacters('payaso'))

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var newArray = [];
  var otherArray = [];
  var alphUpper = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var splitted = string.split('');
  for (var letter of splitted){
    if(alphUpper.includes(letter)){
      newArray.push(letter)
    } else {
      otherArray.push(letter)
    }
  }
  var result = newArray.join('')+otherArray.join('');
  return result
}
//console.log(capToFront("soyHENRY"))

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var splitted = frase.split(' ');
  var array = []
  for (var word of splitted){
    var wordSplit = word.split('');
    var reverse = wordSplit.reverse();
    var joined = reverse.join('')
    array.push(joined)
  }
  return array.join(' ')
  
}

//console.log(asAmirror('Maria La Paz'))

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var str = numero.toString();
  var splitted = str.split('').reverse().join('');

  if (str === splitted){
    return 'Es capicua'
  }
  return "No es capicua"
}
//console.log(capicua(68413))

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let array = string.split('');
  var filtered = array.filter((letter) => letter!=='a' && letter!="b" && letter!="c")
  return filtered.join('')
}
//console.log(deleteAbc("margarabotonco"))

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var sorted = arrayOfStrings.sort((a, b) => a.length - b.length )
  return sorted
}
//console.log(sortArray(["Mañana", "Será", "Un", "Dia", "Bonito"]))

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var newArray = [];
  for (var element of array2){
    if (array1.includes(element)){
      newArray.push(element)
    }
  }
  return newArray
}

console.log(buscoInterseccion([4,2,3], [1,3,4]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

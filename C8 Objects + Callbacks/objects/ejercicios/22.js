function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var splitted = str1.split('')
   var splitted2 = str2.split('')
   var sorted = splitted.sort()
   var sorted2 = splitted2.sort()
   var joined = sorted.join('')
   var joined2 = sorted2.join('')

   if(joined === joined2){
      return true
   }
   return false
}

console.log(esAnagrama("hola", "halo"))

module.exports = esAnagrama;

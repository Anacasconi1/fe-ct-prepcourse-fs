function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var loop = 0
  var array = []
  while (loop < 10){
    loop ++
    num = num +2
    array.push(num)
    if (num == loop){
      return "Se interrumpió la ejecución"
      
    }
  }
  return array

}
console.log(breakStatement(-4))
module.exports = breakStatement;

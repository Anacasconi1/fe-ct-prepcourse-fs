function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var loop = 0;
  var array = [];
  while (loop < 10){
    if (loop === 4){
      loop ++;
      num += 2;
      continue;
    }
    array.push(num);
    num += 2;
    loop ++;
  }
  return array;
}

console.log(continueStatement(50))

module.exports = continueStatement;

var myObject = {
  nombre : "Paola",
  apellido : "Carisima"
}


const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var count = 0
  for (object in objeto){
    count ++;
  }
  return count
}; 

console.log(contarPropiedades(myObject))

module.exports = contarPropiedades;

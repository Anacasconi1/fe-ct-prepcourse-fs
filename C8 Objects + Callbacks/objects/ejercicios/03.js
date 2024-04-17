var myObject = {
  nombre : "Paola",
  apellido : "Carisima"
}


const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor
  return objeto
};

console.log(agregarNuevaPropiedad(myObject, "años", "22"))
module.exports = agregarNuevaPropiedad;

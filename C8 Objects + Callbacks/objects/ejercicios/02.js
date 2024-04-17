var myObject = {
   nombre : "Paola",
   apellido : "Carisima"
}


function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:

   objeto[propiedad] = valor;
   return objeto;
}

console.log(actualizarValorPropiedad(myObject, "nombre", "Marta"))
module.exports = actualizarValorPropiedad;

var myUser = {
  user : "mango123",
  password : "Olandrique15",
  amigos : ["pablo", "jose"]
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario["amigos"].push(nuevoAmigo)
  return objetoUsuario

}

console.log(agregarAmigo(myUser, "matias"))


module.exports = agregarAmigo;

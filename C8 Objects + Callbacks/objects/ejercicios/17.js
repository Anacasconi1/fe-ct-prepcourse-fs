var myUser = {
  user : "mango123",
  password : "Olandrique15",
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario["password"] = nuevaPassword
  
  return objetoUsuario
}

console.log(actualizarPassword(myUser, "Ola123"))
module.exports = actualizarPassword;

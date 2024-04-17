var myObject = {
  name : "jake",
  surname : "Ryan",
  age : 22,
  email : "jake@gmail.com"
}

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario["email"] == undefined){
    return false
  }
  return true
}

console.log(tieneEmail(myObject))

module.exports = tieneEmail;

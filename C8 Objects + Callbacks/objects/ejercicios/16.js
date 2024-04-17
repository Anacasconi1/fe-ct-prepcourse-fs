var myUser = {
  user : "mango123",
  password : "Olandrique15",
}

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario["password"] === password){
    return true
  }
  return false
}

console.log(verificarPassword(myUser, "Olandrique15"))
module.exports = verificarPassword;

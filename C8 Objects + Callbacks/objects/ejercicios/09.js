var newUser = {}

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  newUser["nombre"] = nombre;
  newUser["email"] = email;
  newUser["password"] = password;
  return newUser

}

console.log(nuevoUsuario("Maria", "marilin@gmail.com", 4567213))
module.exports = nuevoUsuario;

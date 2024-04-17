var aLotOfUsers = [
   User1 ={
    nombre: "maria",
    esPremium : true
  },
  User2 ={
    nombre: "carlos",
    esPremium : true
  },
  User3 ={
    nombre: "jose",
    esPremium : false
  }
]



function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  objetoMuchosUsuarios.map(user => {
    user["esPremium"] = true
  });
  return objetoMuchosUsuarios
}

console.log(pasarUsuarioAPremium(aLotOfUsers))
module.exports = pasarUsuarioAPremium;

var User1 ={
  nombre: "maria",
  esPremium : true,
  posts : [
    post = {
      likes : 1
    },
    post = {
      likes : 12
    }
  ]
}


function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var count = 0
  var posted = objetoUsuario["posts"]
  var mapped = posted.map((post) =>post["likes"])
  var reduced = mapped.reduce((a, b)=>a+b, count)
  return reduced
}

console.log(sumarLikesDeUsuario(User1))
module.exports = sumarLikesDeUsuario;

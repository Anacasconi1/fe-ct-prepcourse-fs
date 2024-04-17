var Cat = new Object()
function meow (){
  return "Meow!"
}
function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  
  Cat["nombre"] = nombre
  Cat["edad"] = edad
  Cat["meow"] = meow()
  return Cat
}

console.log(crearGato("Sanji", "22"))
module.exports = crearGato;

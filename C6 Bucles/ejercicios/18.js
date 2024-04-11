


function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var iter=1
  for (let i = a ; i <= b; i ++){
    
    iter = i*iter
  } 
  return iter


}
console.log(productoEntreNúmeros(1, 5))
module.exports = productoEntreNúmeros;
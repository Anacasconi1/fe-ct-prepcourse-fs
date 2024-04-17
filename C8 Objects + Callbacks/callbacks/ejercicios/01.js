function nothingToEjecute () {
   return 
}
function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   return cb()
}

console.log(invocarCallback(nothingToEjecute));

module.exports = invocarCallback;

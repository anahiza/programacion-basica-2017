var z = aleatorio(10,20)
document.write(z)

function aleatorio(min, max){
  var resultado = Math.floor(Math.random()*(max-min))+min
  return resultado
}
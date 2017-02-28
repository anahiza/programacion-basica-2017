var vp = document.getElementById("villaplatzi")
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

var posiciones_vacas = []
var posiciones_pollos = []
var posicion_cerdo = {
  x: aleatorio(0,420),
  y: aleatorio(0,420)
}

var fondo = {
  url: "tile.png",
  cargaOK: false
}

fondo.objeto = new Image()
fondo.objeto.src = fondo.url
fondo.objeto.addEventListener("load", cargarFondo)


var vaca = {
  url: "vaca.png",
  cargaOK: false
}

vaca.objeto= new Image()
vaca.objeto.src=vaca.url
vaca.objeto.addEventListener("load", cargarVacas)

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}
cerdo.objeto = new Image()
cerdo.objeto.src = cerdo.url
cerdo.objeto.addEventListener("load", cargarCerdos)
document.addEventListener("keydown", moverCerdo)

var pollo = {
  url: "pollo.png",
  cargaOK: false
}

pollo.objeto = new Image()
pollo.objeto.src = pollo.url
pollo.objeto.addEventListener("load", cargarPollos)

posiciones_vacas= genera_posiciones_aleatorias(posiciones_vacas)
posiciones_pollos=genera_posiciones_aleatorias(posiciones_pollos)

function aleatorio(min, max){
  var resultado = Math.floor(Math.random()*(max-min))+min
  return resultado
}

function dibujar(){
  var cantidad
  var x, y
  if (fondo.cargaOK) {
    papel.drawImage(fondo.objeto,0,0)
  }

  if (vaca.cargaOK) {     
    for (i=0; i<posiciones_vacas.length; i++){
      papel.drawImage(vaca.objeto,posiciones_vacas[i].x, posiciones_vacas[i].y)
    }    
  }

  if (cerdo.cargaOK) {
    papel.drawImage(cerdo.objeto, posicion_cerdo.x, posicion_cerdo.y)
  }

  if (pollo.cargaOK) {
    for (var i = 0 ; i<posiciones_pollos.length; i++){
      papel.drawImage(pollo.objeto, posiciones_pollos[i].x,posiciones_pollos[i].y)
    } 
  }

}

function cargarFondo(){
  fondo.cargaOK=true
  dibujar()
}

function cargarVacas(){
  vaca.cargaOK=true
  dibujar()
}

function cargarCerdos(){
  cerdo.cargaOK=true
  dibujar()
}

function cargarPollos(){
  pollo.cargaOK=true
  dibujar()
}

function genera_posiciones_aleatorias(arreglo){
  var cantidad = aleatorio(1,15)
  for (var i = 0 ; i<cantidad; i++){
    x = aleatorio(0,7)
    y = aleatorio(0,7)
    x= x*60
    y=y*60
    var coordenadas = {}
    coordenadas.x = x
    coordenadas.y = y
    arreglo.push(coordenadas)
  }    
  return arreglo
}

function moverCerdo(ev){
  switch (ev.keyCode){
    case teclas.UP:
      if (posicion_cerdo.y>0){
        posicion_cerdo.y-=5
      }
      break;
    case teclas.DOWN:
      if (posicion_cerdo.y<420){
        posicion_cerdo.y+=5
      }
      break;     
    case teclas.LEFT:
      if (posicion_cerdo.x>0){
        posicion_cerdo.x-=5
      }
      break;     
    case teclas.RIGHT:
      if (posicion_cerdo.x<420){
        posicion_cerdo.x+=5
      }
      break;      
  }
  dibujar()

}
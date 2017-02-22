var d = document.getElementById("lienzo");
var papel = d.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}



var x = 150
var y = 150
var movimiento = 5
dibujarLinea(x-1,y-1,x+1,y+1,"red",papel)

document.addEventListener("keydown", dibujarTeclado)

function dibujarTeclado(ev) {
  var colorcito="blue"
  switch (ev.keyCode){
    case teclas.UP:
      dibujarLinea(x, y, x, y-movimiento, colorcito, papel)
      y=y-movimiento
      break;
    case teclas.DOWN:
      dibujarLinea(x, y, x, y+movimiento, colorcito, papel)
      y=y+movimiento
      break;
    case teclas.LEFT:
      dibujarLinea(x, y, x-movimiento, y, colorcito, papel)
      x=x-movimiento
      break;
    case teclas.RIGHT:
      dibujarLinea(x+movimiento, y, x, y, colorcito, papel)
      x=x+movimiento
      break;
    default:
      break
  }
}

function dibujarLinea(x1, y1, x2, y2, color, lienzo) {
  lienzo.beginPath();
  lienzo.lineWidth = 3;
  lienzo.strokeStyle = color;
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath();
}
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var texto= document.getElementById("texto_lineas");
var boton= document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick)



function dibujarLinea(x1, y1, x2, y2, color) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var inicio = 0;
  var final = d.width-1;
  var ancho = final/lineas;
  for (i = 0; i <=lineas; i++){
      dibujarLinea(inicio, 0, 0, final, "black");
      final-=ancho;
      inicio+=ancho;
  }
}

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var inicio = 0;
var final = 300;

for (i = 0; i <= 300; i+=10){
    dibujarLinea(inicio, 0, 0, final, "black");
    final-=10;
    inicio+=10;
}


function dibujarLinea(x1, y1, x2, y2, color) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath();
}
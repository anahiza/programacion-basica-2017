var imagenes = []
imagenes["Cauchin"]="vaca.png"
imagenes["Pokacho"]="pollo.png"
imagenes["Tocinauro"]="cerdo.png"

class Pakiman {
  constructor(n, v, a) {
    this.nombre=n
    this.vida = v
    this.ataque=a
    this.imagen= new Image();
    this.imagen.src=imagenes[this.nombre]
  }

  hablar(){
    alert(this.nombre)
  }
  mostrar(){
    document.body.appendChild(this.imagen)
    document.write("<p>")
    document.write("<strong>"+this.nombre+"</strong><br/>")
    document.write("Vida: "+this.vida+"<br>") 
    document.write("Ataque: "+this.ataque+"<br>")
    document.write("</p>")
    document.write("<hr>")
  }
}

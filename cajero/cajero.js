class Billete{
  constructor(v,c){
    this.valor = v
    this.cantidad = c
  }
}

var caja = []
var entregado = []

caja.push(new Billete(100,30))
caja.push(new Billete(50,30))
caja.push(new Billete(20,20))
caja.push(new Billete(10,20))
caja.push(new Billete(5,5))

var dinero = 0
var div = 0
var papeles = 0

var b = document.getElementById("Extraer")
b.addEventListener("click", entregar_dinero)
var r = document.getElementById("resultado")


function entregar_dinero(){
  r.innerHTML=""
  var t = document.getElementById("dinero")
  dinero=parseInt(t.value)
  for (var bi of caja){
    if (dinero>0){
      div = Math.floor(dinero/bi.valor)
      if (div > bi.cantidad){
        papeles=bi.cantidad
      }
      else{
        papeles = div
      }   
      entregado.push(new Billete( bi.valor, papeles))     
      dinero=dinero-(bi.valor*papeles)
    }
  }
  if (dinero>0){
    r.innerHTML="No tengo dinero suficiente dinero"
  }
  else {
    for (var e of entregado){
      if (e.cantidad>0){
        r.innerHTML=r.innerHTML+e.cantidad+ " billetes de $ "+e.valor+"<br>"        
      }
    }
    
  }
}
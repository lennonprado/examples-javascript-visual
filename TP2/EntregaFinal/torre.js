function Tower(){
  this.discos = [];
  this.x;
}

Tower.prototype.sacar = function() {


}

Tower.prototype.poner = function(d) {
  if(this.acepta(d)){
    this.discos[this.discos.length] = d;
  }
  else {
    alert("No es posible agregar una pieza de mayor peso sobre una de menor peso");
  }
}

Tower.prototype.acepta = function(d) {
  if(this.discos[this.discos.length].p > d.p)
    return true;
  else
    return false;
}

Tower.prototype.draw = function(ctx) {
  let y = 600;
  // dibujar primero la torre
  for (let i = 0; i< this.discos.length; i++){
    this.discos[i].draw(ctx,this.x,y);
    y = y-this.discos[i].espesor;
  }

}

Tower.prototype.cantidadDiscos = function() {
  return this.discos.length;
}

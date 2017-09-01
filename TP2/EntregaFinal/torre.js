function Tower(pos){
  this.discos = [];
  this.x = pos * 100+50;
  this.w = 300;
}

Tower.prototype.sacar = function() {
  return this.discos.pop();
}

Tower.prototype.poner = function(d) {
    this.discos.push(d);
}

Tower.prototype.acepta = function(d) {
  if(this.discos[this.discos.length-1].p > d.p)
    return true;
  else
    return false;
}

Tower.prototype.draw = function(ctx) {


  ctx.strokeStyle = "#000000";
  ctx.lineWidth   = 1;
  ctx.strokeRect(this.x - (this.w/2),this.x + (this.w/2), 100,600);



  let y = 600;
  // dibujar primero la torre
  for (let i = 0; i<this.discos.length; i++){
    y = y-this.discos[i].espesor;
    this.discos[i].draw(ctx,this.x,y);
  }
}

Tower.prototype.cantidadDiscos = function() {
  return this.discos.length;
}

Tower.prototype.clickeado = function(x,y){
  if ((x > this.x-this.w/2) && (x < this.x+this.w/2))
    return true;
  else
    return false;
}

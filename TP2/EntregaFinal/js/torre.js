function Tower(pos){
  this.discos = [];
  this.x = pos;
  this.w = 300;
}

Tower.prototype.sacar = function() {
  return this.discos.pop();
}

Tower.prototype.poner = function(d) {
    this.discos.push(d);
}

Tower.prototype.isReady = function(){
  var printable = false
  for(let i = 0; i< this.discos.length-1; i++)
    if(this.discos[i].isPrintable())
      printable = true;
  return printable;
}

Tower.prototype.acepta = function(d) {
  if(this.discos.length > 0){
    if(this.discos[this.discos.length-1].p > d.p)
      return true;
    else
      return false;
  }
  else {
    return true;
  }

}

Tower.prototype.draw = function(ctx) {
  ctx.strokeStyle = "#000000";
  ctx.lineWidth   = 1;
  ctx.strokeRect(this.x - (this.w/2),0,this.x + (this.w/2),600);

  ctx.beginPath();
  ctx.fillStyle = "#825201";;
  ctx.fillRect(this.x-10,100,20,600);
  ctx.closePath();


  let y = 600;
  for (let i = 0; i<this.discos.length; i++){
    y = y-this.discos[i].espesor;
    this.discos[i].draw(ctx,this.x,y);
  }
}

Tower.prototype.cantidadDiscos = function() {
  return this.discos.length;
}

Tower.prototype.clickeado = function(x,y){
  if ((x > this.x-(this.w/2)) && (x < this.x+(this.w/2)))
    return true;
  else
    return false;
}

Tower.prototype.hasDisc = function(){
  if (this.discos.length > 0)
    return true;
  else
    return false;
}

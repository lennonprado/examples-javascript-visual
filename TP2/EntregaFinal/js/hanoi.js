function Hanoi(cantidadDiscos){
  this.left = new Tower(150);
  this.middle = new Tower(450);
  this.right = new Tower(750);
  this.cantidadDiscos = cantidadDiscos;
  for(let i=0; i<cantidadDiscos; i++){
      let d = new Disc(cantidadDiscos-i);
      this.left.poner(d);
  }
}

Hanoi.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.left.draw(ctx);
  this.middle.draw(ctx);
  this.right.draw(ctx);
}

Hanoi.prototype.selected = function(x,y){
  if(this.left.clickeado(x,y))
    return this.left;
  if(this.middle.clickeado(x,y))
    return this.middle;
  if(this.right.clickeado(x,y))
    return this.right;
}

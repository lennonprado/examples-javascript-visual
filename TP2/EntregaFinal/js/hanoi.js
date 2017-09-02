function Hanoi(cantidadDiscos){
  this.left = new Tower(150);
  this.middle = new Tower(450);
  this.right = new Tower(750);
  this.moves = 0;
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
  else if(this.middle.clickeado(x,y))
    return this.middle;
  else if(this.right.clickeado(x,y))
    return this.right;
  else
    return null;
}

Hanoi.prototype.hasDisc = function(x,y){
  if((this.left.clickeado(x,y)) && (this.left.hasDisc()))
    return true;
  else if((this.middle.clickeado(x,y)) && (this.middle.hasDisc()))
    return true;
  else if((this.right.clickeado(x,y)) && (this.right.hasDisc()))
    return true;
  else
    return false;
}


Hanoi.prototype.win = function(){
  if(this.cantidadDiscos == this.right.cantidadDiscos())
    return true;
  else
    return false;
}

Hanoi.prototype.move = function(){
  this.moves++;
  document.getElementById("moves").innerHTML = this.moves;
}

Hanoi.prototype.getMove = function(){
  return this.moves;
}

function Hanoi(cantidadDiscos){

  this.left = new Tower(1);
  this.middle = new Tower(2);
  this.right = new Tower(3);
  this.cantidadDiscos = cantidadDiscos;

  for(let i=0; i<cantidadDiscos; i++){
      let d = new Disc(cantidadDiscos-i);
      this.left.poner(d);
  }


}

Hanoi.prototype.draw = function(ctx){

  //dibujar antes
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  this.left.draw(ctx);
  this.middle.draw(ctx);
  this.right.draw(ctx);


}

Hanoi.prototype.selected = function(x,y){
  if(this.left.clickeado)
    return this.left;
  if(this.middle.clickeado)
    return this.middle;
  if(this.right.clickeado)
    return this.right;
}

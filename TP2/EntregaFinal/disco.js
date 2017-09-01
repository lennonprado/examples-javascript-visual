function Disc(p){
  this.p = p;
  this.espesor = 100;
}

Disc.prototype.draw = function(ctx,x,y) {
  ctx.beginPath();
  ctx.fillStyle = this.c;
  ctx.fillRect(x-(100*this.p/2),y,100*this.p,this.espesor);
  ctx.closePath();
}



Disc.prototype.drawImage = function(ctx,myImg,repeat) {
  ctx.beginPath();
  var img = new Image();
  img.src = myImg;
  img.onload = function() {
      var pattern = ctx.createPattern(img,repeat);
      ctx.fillStyle = pattern;
  };
  ctx.fillDisc(this.x,this.y,200,this.espesor);
  //ctx.fill();
  ctx.closePath();
}

var self = null

function Disc(p){
  this.p = p;
  this.espesor = 50;
  this.color = this.randomizeColor();
  this.ancho = p * 35 + 10;
  self = this;
  this.image = new Image();
  this.image.src = '../img/bgdisco.jpg';
  this.printable=false;
  this.image.onload = function() {
    self.printable = true;
  };
}

Disc.prototype.getAncho = function(){
  return this.ancho;
}

Disc.prototype.isPrintable = function(){
  return this.printable;
}

Disc.prototype.draw = function(ctx,x,y) {
  ctx.beginPath();
  //ctx.fillStyle = this.color;
//  ctx.fillRect(x-(this.ancho/2),y,this.ancho,this.espesor);

  ctx.drawImage(this.image,x-(this.ancho/2),y,this.ancho,this.espesor);

  ctx.closePath();
}

Disc.prototype.randomizeColor = function () { //function name
        var color = '#'; // hexadecimal starting symbol
        var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0','FF9900']; //Set your colors here
        color += letters[Math.floor(Math.random() * letters.length)];
        return color;
}

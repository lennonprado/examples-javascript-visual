function Disc(p){
  this.p = p;
  this.espesor = 50;
  this.color = this.randomizeColor();
  this.ancho = p * 35 + 10;
}

Disc.prototype.draw = function(ctx,x,y) {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(x-(this.ancho/2),y,this.ancho,this.espesor);
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

Disc.prototype.randomizeColor = function () { //function name
        var color = '#'; // hexadecimal starting symbol
        var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0','FF9900']; //Set your colors here
        color += letters[Math.floor(Math.random() * letters.length)];
        return color;
}

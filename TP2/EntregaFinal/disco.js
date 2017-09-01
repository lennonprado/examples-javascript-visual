function Disc(p){
  this.p = p;
  this.espesor = 50;
}

Disc.prototype.draw = function(ctx,x,y) {
  ctx.beginPath();
  ctx.fillStyle = this.randomizeColor();
  ctx.fillRect(x-(50*this.p/2)+50,y,x+(50*this.p)-50,this.espesor);
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
        var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
        color += letters[Math.floor(Math.random() * letters.length)];
        return color;
}

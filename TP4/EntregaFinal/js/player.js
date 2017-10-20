function Player(){
    this.radio = 280;
    this.posicionX = 100;
    this.posicionY = 500;
    this.player = document.getElementById('runner');
}

Player.prototype.getX = function(){
  return this.posicionX;
}

Player.prototype.getY = function(){
  return this.posicionY;
}

Player.prototype.getR = function(){
  return this.radio;
}

Player.prototype.stop = function(){
  this.player.className = "runner-stop";



  /* animation end y animation start */
}

Player.prototype.jump = function(){
  this.player.className = "runner-jump";

  this.player.addEventListener('webkitAnimationEnd',function(){
    this.className = "runner-stop";
    //console.log('x');
  })
}

Player.prototype.right = function(){
  this.player.className = "runner-right";
}

Player.prototype.down = function(){
  this.player.className = "runner-down";
}

Player.prototype.die = function(){
  this.player.className = "runner-die";
}
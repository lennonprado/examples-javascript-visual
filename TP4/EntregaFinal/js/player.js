function Player(){
    this.estado = 'stop';
    this.player = document.getElementById('runner');
}

Player.prototype.xRight = function(){
  return this.player.style.left + this.player.style.width;
}

Player.prototype.xLeft = function(){
  return 10;
}
Player.prototype.yBottom = function(){
  return this.player.style.top + this.player.style.heigh;
}
Player.prototype.yTop = function(){
  return this.player.style.top;
}

Player.prototype.stop = function(){
  this.estado = 'stop';
  this.player.className = "runner-stop";
}

Player.prototype.jump = function(){
  this.estado = 'jump';
  this.player.className = "runner-jump";
  this.player.addEventListener('webkitAnimationEnd',() => {
  })
}

Player.prototype.right = function(){
  this.estado = 'run';
  this.player.className = "runner-right";
}

Player.prototype.down = function(){
  this.estado = 'down';
  this.player.className = "runner-down";
}

Player.prototype.die = function(){
  this.player.className = "runner-die";
}

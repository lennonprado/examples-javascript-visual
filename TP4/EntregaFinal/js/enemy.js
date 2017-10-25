function Enemy(id){
  this.estado = 'on';
  this.posicionX = screen.width + (Math.floor((Math.random() * 10) * 100 ) );
  this.posicionY = 500;
  this.radio = 50;
  this.id = id;
  this.enemy = document.getElementById(id);
  this.enemy.style.left = this.posicionX + 'px';
  this.enemy.style.top = this.posicionY + 'px';
}

Enemy.prototype.getX = function(){
  return this.posicionX;
}

Enemy.prototype.move = function(){
  if(player.estado == 'stop')
    this.posicionX = this.posicionX-2;
  else
    this.posicionX = this.posicionX-10;

  if((this.posicionX+this.radio) < 0){
    this.posicionX = screen.width + Math.floor((Math.random() * 10));
    this.enemy.className = "enemy";
    this.estado = "on";
  }
  this.enemy.style.left = this.posicionX + 'px';
}

Enemy.prototype.kaboom = function(){
  this.enemy.className = "enemy-kaboom";
  this.estado = "off";
}

Enemy.prototype.pasado = function(){
  this.enemy.className = "enemy-pasado";
  this.estado = "off";
}

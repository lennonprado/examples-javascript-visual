var self;

function Game(player){
    this.enemigos = [];
    this.ArrowRight = false;
    this.ArrowUp = false;
    this.player = player;
    this.lives = 3;
    this.points = 0;
    self = this;
    for(let i=0;i<5;i++){
        enemy = new Enemy(i);
        this.enemigos.push(enemy);
    }
}
Game.prototype.restarVida = function(){
  this.lives = this.lives - 1;
  document.getElementById('vidas').innerHTML = this.lives;
}
Game.prototype.sumarPunto = function(){
  this.points = this.points + 1;
  document.getElementById('puntos').innerHTML = this.points;
}
Game.prototype.update = function(){

    if(this.ArrowUp == true){
      player.jump();
      this.moverfondo();
    }
    else if(this.ArrowRight == true){
      player.right();
      this.moverfondo();
    }
    else {
      player.stop();
      this.pararfondo();
    }
    for(let i=0;i<this.enemigos.length;i++){
        this.enemigos[i].move();
        if(this.verifyColition(this.player,this.enemigos[i])){
              this.enemigos[i].kaboom();
              this.restarVida();
              if (this.lives == 0)
                this.player.die();
        }
    }
}

Game.prototype.jugar = function(){
  id = setInterval(function(){
    self.update();
  }, 50);
}

Game.prototype.verifyColition = function(miPlayer,enemy){
  if(enemy.estado == 'on'){
    if((enemy.posicionX < 140) && (enemy.posicionX > 100) && (player.estado != 'jump')){
        return true;
    }
    else {
      // si lo salto
      if ((enemy.posicionX < 100)&&(enemy.estado == 'on')) {
        this.sumarPunto();
        enemy.pasado();
      }
      return false
    }

  }
  else {
    return false;
  }
}

Game.prototype.moverfondo = function() {
  document.getElementById('layer01').style.animationPlayState='running';
  document.getElementById('layer02').style.animationPlayState='running';
  document.getElementById('layer03').style.animationPlayState='running';
  document.getElementById('layer04').style.animationPlayState='running';
  document.getElementById('body').style.animationPlayState='running';
}
Game.prototype.pararfondo = function() {
  document.getElementById('layer01').style.animationPlayState='paused';
  document.getElementById('layer02').style.animationPlayState='paused';
  document.getElementById('layer03').style.animationPlayState='paused';
  document.getElementById('layer04').style.animationPlayState='paused';
  document.getElementById('body').style.animationPlayState='paused';
}

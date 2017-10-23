var self;

function Game(player){
    this.enemigos = [];
    this.ArrowRight = false;
    this.ArrowUp = false;
    this.ArrowDown = false;
    this.player = player;
    self = this;
    for(let i=0;i<5;i++){
        enemy = new Enemy(i);
        enemy.draw();
        this.enemigos.push(enemy);
    }
}
Game.prototype.update = function(){

    if(this.ArrowUp == true){
      player.jump();
      this.moverfondo();
    }
    else if(this.ArrowDown == true){
      player.down();
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
          // logica del juego
          //console.log('toca');
      }
      else {
        //console.log('no toca');
      }
  }
}

Game.prototype.jugar = function(){
  id = setInterval(function(){
    self.update();
  }, 50);
}

Game.prototype.verifyColition = function(miPlayer,enemy){


console.log(document.getElementById('runner').style.top);

  document.getElementById('px').innerHTML = document.getElementById('runner').style.top;
          return true;
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

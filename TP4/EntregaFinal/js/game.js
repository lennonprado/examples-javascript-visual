var self;

function Game(player){
    this.enemigos = [];
    this.player = player;
    self = this;
    for(let i=0;i<5;i++){
        enemy = new Enemy(i);
        enemy.draw();
        this.enemigos.push(enemy);
    }
}
Game.prototype.update = function(){

  for(let i=0;i<this.enemigos.length;i++){
      this.enemigos[i].move();
      if(this.verifyColition(this.player,this.enemigos[i])){

          // logica del juego
          console.log('toca');

      }
      else {
        console.log('no toca');
      }
  }
}

Game.prototype.jugar = function(){
  id = setInterval(function(){
    self.update();
  }, 50);
}

Game.prototype.verifyColition = function(player,enemy){

  playerMaxX = player.getX() + player.getR();
  playerMaxY = player.getY() + player.getR();

  enemyMaxX = enemy.getX() + enemy.getR();

  if(playerMaxX < enemy.getX()){
      return false;
  }
  else {
      if(player.getX() > enemyMaxX){
        return false;
      }
      else {
        if(playerMaxY < enemy.getY()){
          return false;
        }
        else {
          return true;
        }
      }
  }
}

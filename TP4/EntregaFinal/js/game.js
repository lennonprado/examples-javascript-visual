const MY_CONSTANT_MIN = 1;
const MY_CONSTANT_SEG = 30;

var self;
var idjugar;
var minutos;
var segundos;

function Game(player){
    minutos = MY_CONSTANT_MIN;
    segundos = MY_CONSTANT_SEG;
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
  if((segundos === 0)&&(minutos===0)){
      this.ganar();
  }
  else {

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
                this.perder();
        }
    }
  }

}

Game.prototype.jugar = function(){




  idjugar = setInterval(function(){
    self.update();
  }, 50);



  idReloj = setInterval(function(){
    if (segundos === 0){
      segundos=59;
      minutos--;
    }
    segundos --;
    var string = "";
    var decimalS = "";
    var decimalM = "";
    if(segundos<10) decimalS = "0";
    if(minutos<10) decimalM = "0";
    string += decimalM+minutos + ':'+ decimalS +''+ segundos;
    document.getElementById("tiempo").innerHTML = string;
  }, 1000);

}

Game.prototype.perder = function(){
    clearInterval(idjugar);
    clearInterval(idReloj);
    this.pararfondo();
    this.player.die();
    delete(this);
    document.getElementsByClassName('mensaje')[0].innerHTML = "Game Over";
    document.getElementsByClassName('intro-out')[0].className = "intro";
}

Game.prototype.ganar = function(){
    clearInterval(idjugar);
    clearInterval(idReloj);
    this.pararfondo();
    this.player.stop();
    delete(this);
    document.getElementsByClassName('mensaje')[0].innerHTML = "You Win";
    document.getElementsByClassName('intro-out')[0].className = "intro";
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

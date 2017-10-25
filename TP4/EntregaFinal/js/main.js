var player = new Player();
var juego = new Game(player);

function newjuego(){
  document.getElementsByClassName('intro')[0].className = "intro-out";
  juego.jugar();
}

function controles() {
  if(document.getElementsByClassName('controles')[0].style.display != 'block'){
    document.getElementsByClassName('controles')[0].style.display = 'block';
  }
  else {
    document.getElementsByClassName('controles')[0].style.display = 'none';
  }
}

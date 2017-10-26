


function newjuego(){
  document.getElementsByClassName('intro')[0].className = "intro-out";
  player = new Player();
  juego = new Game(player); 
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

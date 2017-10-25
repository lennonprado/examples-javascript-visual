document.onkeydown = function(e) {
  switch(event.code) {
      case "ArrowRight":
          juego.ArrowRight = true;
          break;
      case "ArrowUp":
          juego.ArrowUp = true;
          break;
      default:
          break;
  }
}

document.onkeyup = function(e) {
  switch(event.code) {
    case "ArrowRight":
        juego.ArrowRight = false;
        break;
    case "ArrowUp":
        juego.ArrowUp = false;
        break;
    default:
        break;
  }
}

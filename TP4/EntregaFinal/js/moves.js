document.onkeydown = function(e) {
  switch(event.code) {
      case "ArrowRight":
          juego.ArrowRight = true;
          break;
      case "ArrowUp":
          juego.ArrowUp = true;
          break;
      case "ArrowDown":
          juego.ArrowDown = true;
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
    case "ArrowDown":
        juego.ArrowDown = false;
        break;
    default:
        break;
  }
}

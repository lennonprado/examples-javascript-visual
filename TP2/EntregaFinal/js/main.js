
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var juego = null;
var discoAux = null;
var torreOld = null;
var torreNew = null;
var best = 0;

    function jugar(cantidadDiscos){
      juego = new Hanoi(cantidadDiscos);
      juego.draw(ctx);
      document.getElementById("moves").innerHTML = 0;                      
    }

    canvas.onmousedown = function(e){
      torreOld = juego.selected(e.clientX,e.clientY);
      if(torreOld.hasDisc()){
        discoAux = torreOld.sacar();
        juego.move();
      }
      else
        torreOld = null;
    }

    canvas.onmousemove = function(e){
      if((discoAux != null) && (torreOld!= null)){
        juego.draw(ctx);
        discoAux.draw(ctx,e.clientX,e.clientY);
      }
    }
    canvas.onmouseup = function(e){
        torreNew = juego.selected(e.clientX,e.clientY);
        if(torreNew != null){
            if(torreNew.acepta(discoAux)){
                torreNew.poner(discoAux);
                torreNew = null;
                torreOld = null;
                discoAux = null;
                if(juego.win()){
                    alert("Win");
                    if(best > 0){
                      if(juego.getMove() < best)
                        document.getElementById("best").innerHTML = juego.getMove();
                    }
                    else {
                      document.getElementById("best").innerHTML = juego.getMove();
                    }
                }
            }
            else{
              alert("No permitido");
              torreOld.poner(discoAux);
              torreNew = null;
              torreOld = null;
              discoAux = null;
            }
        }
        juego.draw(ctx);
    }
//    setInterval(newSemilla, 1000);

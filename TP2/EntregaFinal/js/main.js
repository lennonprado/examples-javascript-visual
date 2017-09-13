
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
 juego = null;
var discoAux = null;
var torreOld = null;
var torreNew = null;
var best = 0;

    function jugar(cantidadDiscos){

      juego = new Hanoi(cantidadDiscos);

      document.getElementById("canvas").style.display = 'none';
      document.getElementById("bienvenido").style.display = 'none';
      document.getElementById("win").style.display = 'none';
      document.getElementById("cargando").style.display = 'block';

      setTimeout(function(){
        juego.draw(ctx);
        document.getElementById("moves").innerHTML = 0;
        document.getElementById("bienvenido").style.display = 'none';
        document.getElementById("win").style.display = 'none';
        document.getElementById("cargando").style.display = 'none';
        document.getElementById("canvas").style.display = 'block';
      },2000);
    }

    canvas.onmousedown = function(e){
      torreOld = juego.selected(e.clientX,e.clientY);
      if(torreOld.hasDisc()){
        discoAux = torreOld.sacar();
        juego.move();
      }
      else {
        torreOld = null;
      }
      juego.draw(ctx);
    }

    canvas.onmousemove = function(e){
      if((discoAux != null) && (torreOld!= null)){
        juego.draw(ctx);
        discoAux.draw(ctx,e.clientX-discoAux.getAncho()/2,e.clientY-100);
      }
    }
    canvas.onmouseup = function(e){
      if((discoAux != null) && (torreOld!= null)){
          torreNew = juego.selected(e.clientX,e.clientY);
        if(torreNew != null){
            if(torreNew.acepta(discoAux)){
                torreNew.poner(discoAux);
                torreNew = null;
                torreOld = null;
                discoAux = null;
                if(juego.win()){
                  document.getElementById("bienvenido").style.display = 'none';
                  document.getElementById("win").style.display = 'block';
                  document.getElementById("cargando").style.display = 'none';
                  document.getElementById("canvas").style.display = 'none';
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
              alert("Movimiento no permitido");
              torreOld.poner(discoAux);
              torreNew = null;
              torreOld = null;
              discoAux = null;
            }
        }
      }
        juego.draw(ctx);
    }
//    setInterval(newSemilla, 1000);

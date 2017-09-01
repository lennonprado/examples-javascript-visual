
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var discoAux = null;
var torreOld = null;
var torreNew = null;

    function jugar(cantidadDiscos){
      var juego = new Hanoi(cantidadDiscos);
      juego.draw(ctx);
    }


    canvas.onmousedown = function(e){
      torreOld = juego.selected(e.clientX,e.clientY);
      discoAux = this.torreOld.sacar();
    }

    canvas.onmouseup = function(e){
        torreNew = juego.selected(e.clientX,e.clientY);
        if(torreNew.acepta(discoAux))
          torreNew.poner(discoAux);
        else{
          alert("No permitido");
          torreOld.poner(discoAux);
        }
    }

    canvas.onmousemove = function(e){
      if((discoAux != null) && (torreOld!= null)){
        juego.draw(ctx);
        discoAux.draw(ctx,e.clientX,e.clientY);
      }
    }

//    setInterval(newSemilla, 1000);

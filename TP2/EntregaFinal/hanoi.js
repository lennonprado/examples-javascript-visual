function Hanoi(cantidadDiscos){

  this.left = new Torre();
  this.middle = new Torre();
  this.right = new Torre();

  this.cantidadDiscos = cantidadDiscos;

  for(let i=0; i<cantidadDiscos; i++){
      let d = new Disco(cantidadDiscos-i);
      this.left.poner(d);
  }


}

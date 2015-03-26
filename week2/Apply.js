///APPLY

var Persona = function(){ // nuestro "constructor"
    this.nombre = 'José';
}
Persona.prototype.mostrarNombre = function(){
    console.log(this.nombre); //con this accedemos al constructor
}
 
//con apply cambiamos el this referenciado al objeto persona por otroObjeto
var otroObjeto = {
    nombre: 'Pepe'
};


var p = new Persona();
p.mostrarNombre(); //imprime 'José'
p.mostrarNombre.apply(otroObjeto); // imprime 'Pepe'

//APPLY
var obj = {
  delta: 2,
  test: function(num1, num2){
     return (num1 + num2) * this.delta;
  }
};

var resultado = obj.test(2,2);
console.log(resultado); // (2 + 2) * 2 = 8

var cambio = {
  delta: 5
};
 
var resultado = obj.test.apply(cambio, [2,2]);
console.log(resultado); // (2 + 2) * 5 = 20

//CALL
var obj = {
  delta: 2,
  test: function(num1, num2){
     return (num1 + num2) * this.delta;
  }
};

var resultado = obj.test(2,2);
console.log(resultado); // (2 + 2) * 2 = 8

var cambio = {
  delta: 5
};
 
var resultado = obj.test.call(cambio, 2, 2);
console.log(resultado); // (2 + 2) * 5 = 20




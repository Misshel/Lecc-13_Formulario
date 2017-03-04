function Datos(nombre1,apellido1,dni1,dir1) {
  this.nombre = nombre1;
  this.apellido = apellido1;
  this.dni = dni1;
  this.direccion = dir1;
}
//obteniendo el objeto boton
var nuevoBoton = document.getElementById('dato');
var inputClass = document.getElementsByClassName("inputall");

//llamo al evento onclick de mi boton
nuevoBoton.onclick = function () {
  if (inputClass[0].value.length ==0 || inputClass[1].value.length == 0 || inputClass[2].value.length ==0 || inputClass[3].value.length== 0){
      alert("Faltan llenar datos");
  }
  else{
    //var nom = document.getElementById('nombre').value;
    var nuevoDato = new Datos(document.getElementById('nombre').value ,
    document.getElementById('apellido').value,
    document.getElementById('dni').value ,
    document.getElementById('direccion').value);
    var listDatos = "Nombre:"+nuevoDato.nombre+"<br>"+
    "Apellido:"+nuevoDato.apellido + "<br>"+
    "DNI:"+nuevoDato.dni+"<br>"+
    "Dirección:"+nuevoDato.direccion;

    pruevita.innerHTML=listDatos;
  }
}

 var pruevita= document.getElementById("misRespuestas");

 function validacion() {
   if (document.getElementById('nombre').value!==true) {

     return listDatos= false;
   }
   else if (document.getElementById('apellido').value!==true) {

     return listDatos =false;
   }

   else if (document.getElementById('dni').value!==true) {

     return listDatos =false;
   }

   else if (document.getElementById('direccion').value!==true) {

     return listDatos=false;
   }
   return true;
 }










//function Datos(nombre1){

    //this.nombre= nombre1;
    //  this.apellido= getElementsByName('apellido');
    //  this.dni= getElementsByName('dni');
    //  this.email= getElementsByName('email');
//}
//var prueba = new Datos(getElementsById('nombre').value);
// function Datos(nombre,apellido,dni,email){
//   var misDatos={
//     this.nombre= getElementsByName('nombre');
//     this.apellido= getElementsByName('apellido');
//     this.dni= getElementsByName('dni');
//     this.email= getElementsByName('email')
//   }
//
/*
function Datos(nombre,apellido,dni,email){
  var misDatos={
    this.nombre= nombre;
    this.apellido= apellido;
    this.dni= dni;
    this.email= 'email';
  }
  Datos.push(nuevosDatos);
}
var nuevosDatos=[];

function mostrar (nuevosDatos) {
  var mensaje = {"Nombre : "+ this.nombre +"<br>"+
  "Apellido : "+ this.nombre +"<br>"+
  "DNI : "+ this.dni +"<br>"+
  "Email : "+ this.email +"<br>"};
  var a= getElementsById("miFormulario");
  getElementsById("misRespuestas").innerHtml=a;
}

(mostrar.getElementsById("dato");).inner

*/

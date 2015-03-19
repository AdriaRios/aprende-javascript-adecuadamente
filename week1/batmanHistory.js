//¡Asegúrate de que el usuario está listo para jugar!
confirm("¡Estoy listo para jugar!");
var edad = prompt("¿Cuántos años tienes?");
if (edad >=18){
    console.log("Puedes jugar");
}else{
   console.log("Pídele permisos a los papis"); 
}

var intro="Blancanieves y Batman estaban en el paradero de bus, esperando para poder ir de compras. Había una venta de liquidación, y ambos necesitaban comprar prendas nuevas. Batman nunca te cayó bien. Caminas hacia él.";

console.log(intro);

console.log("Batman te mira con odio");

var userAnswer=prompt("¿Te crees muy de buenas, idiota?");

if (userAnswer =="Sí"){
    console.log("Batman te golpea bien fuerte. ¡Él es Batman, y tú eres tú! ¡Pero claro que Batman te ganaría!");
}else{
    console.log("Decidiste que no te sientes con suerte. ¡Bien hecho! Haz ganado el juego de evitar que Batman te rompa la cara");
}

var retroalimentacion=prompt("Califica el juego");

if (retroalimentacion > 8){
    console.log( "Este es solo el comienzo de mi imperio de juegos. ¡Si quieres saber más, no te desconectes!");
}else{    
   console.log("¡¿Me rompí la espalda haciendo este juego para que me des esa calificación?! ¡Es el colmo! ¡Ya verás!"); 
}

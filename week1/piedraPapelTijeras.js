var comparar = function (eleccion1, eleccion2){
    var result;
    
    if (eleccion1==eleccion2){
        result = "¡Es un empate!";
        console.log ("¡Es un empate!");        
    } else if (eleccion1=="piedra"){
        if (eleccion2=="tijeras"){
            result = "piedra gana";
            console.log ("piedra gana"); 
        }else{
            result = "papel gana";
            console.log ("papel gana"); 
        }
        
    }else if(eleccion1=="papel"){
        if (eleccion2=="piedra"){
            result = "papel gana";
            console.log ("papel gana"); 
        }else{
            result = "tijeras gana";
            console.log ("tijeras gana"); 
        }
        
    }else if(eleccion1=="tijeras"){
        if (eleccion2=="piedra"){
            result = "piedra gana";
            console.log ("piedra gana"); 
        }else{
            result = "tijeras gana";
            console.log ("tijeras gana"); 
        }
        
    }
    return result;
}

var usuarioEscoge = Math.random();
var computadorEscoge = Math.random();
if (computadorEscoge <0.34){
	computadorEscoge = "piedra";
}else if(computadorEscoge <=0.67){
	computadorEscoge = "papel";
}else{
	computadorEscoge = "tijeras";
}

comparar(usuarioEscoge, computadorEscoge);
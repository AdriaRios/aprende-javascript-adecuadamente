var comparar = function (eleccion1, eleccion2){
    var result;
    
    if (eleccion1==eleccion2){
    	console.log ("¡Es un empate!"); 
        result = "¡Es un empate!";               
    } else if (eleccion1=="piedra"){
        if (eleccion2=="tijeras"){
        	console.log ("piedra gana"); 
            result = "piedra gana";            
        }else{
        	console.log ("papel gana");
            result = "papel gana";             
        }
        
    }else if(eleccion1=="papel"){
        if (eleccion2=="piedra"){
        	console.log ("papel gana"); 
            result = "papel gana";            
        }else{
        	console.log ("tijeras gana"); 
            result = "tijeras gana";            
        }
        
    }else if(eleccion1=="tijeras"){
        if (eleccion2=="piedra"){
        	console.log ("piedra gana");
            result = "piedra gana";             
        }else{
        	console.log ("tijeras gana"); 
            result = "tijeras gana";
            
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

if (usuarioEscoge <0.34){
	usuarioEscoge = "piedra";
}else if(usuarioEscoge <=0.67){
	usuarioEscoge = "papel";
}else{
	usuarioEscoge = "tijeras";
}

comparar(usuarioEscoge, computadorEscoge);
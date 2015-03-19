/*
*Ejercicio 2 Tema 3 de eloquentjavascript.net
*
*/

var isEven = function (number){
	number =Math.abs(number);	
	var isNumberEven;	
	if (number != 0 && number != 1){
		return isEven (number-2);
	}else{
		if (number==0){			
			isNumberEven = true;
			return isNumberEven;
		}else{			
			isNumberEven = false;			
			return isNumberEven;
		}		
	}
	
}

console.log("Resultado: "+isEven(-10));

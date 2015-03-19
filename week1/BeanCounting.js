/*
*Ejercicio 3 Tema 3 de eloquentjavascript.net
*
*/

var countChar = function (word, charToCount){
	var count=0;
	for (i=0;i<word.length;i++){		
		if (word.charAt(i)==charToCount){
			count++;
		}
	}

	return count;
}


console.log(countChar("paco paquito, poco paquete", "p"));
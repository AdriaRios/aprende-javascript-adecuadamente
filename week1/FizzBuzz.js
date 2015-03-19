/*
*Ejercicio 2 Tema 2 de eloquentjavascript.net
*
*/
for (var i = 1; i <= 100; i++) { 
	if (i%3==0 && i%5==0){
    	console.log("FIZZBUZZ");
	}else if(i%3==0){
		console.log("FIZZ");
	}else if (i%5==0){
		console.log("BUZZ");
	}else{
		console.log(i);
	}
}
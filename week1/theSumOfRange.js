/*
*Ejercicio 1 Tema 4 de eloquentjavascript.net
*
*/

var sum = function (arrayToSum){
	var sum =0;
	for (i=0; i<arrayToSum.length;i++){		
		sum+=arrayToSum[i];
	}
	return sum;
}

var range = function (num1, num2){
	var array=[];
	for (i=num1;i<=num2;i++){		
		array.push(i);
	}
	return array;
}

console.log(range(1,5));

console.log(sum(range(1,5)));
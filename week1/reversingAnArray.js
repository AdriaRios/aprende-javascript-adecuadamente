/*
*Ejercicio 2 Tema 4 de eloquentjavascript.net
*
*/

var reverseArray = function (colToReverse){
	var res = [];

	for (var i=colToReverse.length-1; i>=0;i--){		
		res.push(colToReverse[i])
	}
	return res
}

var reverseArrayInPlace = function (colToReverse){
	return colToReverse.reverse();
}

var array = [1, 2, 4];
reverseArrayInPlace(array);

console.log(array);
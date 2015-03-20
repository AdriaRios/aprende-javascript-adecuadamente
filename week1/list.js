/*
*Ejercicio 3 Tema 4 de eloquentjavascript.net
*
*/

var arrayToList = function (colToConvertList){
	var listResult =null;
	colToConvertList.reverse();
	for (var i=0, j=colToConvertList.length;i<j;i++){
		listResult = {
			value: colToConvertList[i],
			rest: listResult
		}
	}
	return listResult;
}

var listToArray = function (listToConvertCol){
	var colResult =[];
	while (listToConvertCol.rest != null){
		colResult.push (listToConvertCol.value);
		listToConvertCol = listToConvertCol.rest;
	}
	colResult.push (listToConvertCol.value);
	return colResult;
}

var prepend = function (element, list){
	
}

var nth = function (list, element){
	
}

var prepend = function (element, list){
	
}
console.log(arrayToList([10, 20, 30,40,50,60,80]));

console.log(listToArray(arrayToList([10, 20, 30,40,50,60,80])));

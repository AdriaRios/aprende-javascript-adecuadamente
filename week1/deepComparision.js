/*
*Ejercicio 4 Tema 4 de eloquentjavascript.net
*
*/

var deepEqual = function (obj1, obj2){
	return JSON.stringify(obj1) == JSON.stringify(obj2);
}



var obj = {here: {is: "an"}, object: 2};
console.log(JSON.stringify(obj) );
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

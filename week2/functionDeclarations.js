//Maneras de declaras un método y diferencias

console.log(sum(10,10)); //Return 20
function sum(num1, num2){
	return num1 + num2;
}

console.log(sum2(10,10)); //Return Error, sum2 undefined
var sum2 = function(num1, num2){
return num1 + num2;
};


//Las funciones declaradas están siempre disponibles, las funciones en expresión no están disponibles hasta que se interpreta el código
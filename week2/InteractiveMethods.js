//Métodos interactivos de Arrays

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
return (item > 2);
});
console.log("EveryResult: " +everyResult); //false


var someResult = numbers.some(function(item, index, array){
	return (item > 2);
});
console.log("SomeResult: " +someResult); //true

var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
return (item > 2);
});
console.log("FilterResult: "+filterResult); //[3,4,5,4,3]

var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
return item * 2;
});
console.log("MapResult: "+mapResult); //[2,4,6,8,10,8,6,4,2]

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
return prev + cur;
});
console.log("Recuce: "+sum); //15

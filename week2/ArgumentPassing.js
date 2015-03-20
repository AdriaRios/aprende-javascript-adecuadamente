/*
*Ejercicio 4 Tema 4 de eloquentjavascript.net
*
*/

function addTen(num) {
num += 10;
return num;
}
var count = 20;
var result = addTen(count);
console.log(count); //20 - no change
console.log(result); //3



function setName(obj) {
obj.name = "Nicholas";
}
var person = new Object();
setName(person);
console.log("Person: "+person.name); //”Nicholas”

function setName2(obj) {
obj.name = "Nicholas";
obj = new Object();
obj.name = "Greg";
}
var person2 = new Object();
setName2(person2);
console.log("Person2: "+person2.name); //”Nicholas”

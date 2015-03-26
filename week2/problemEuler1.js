//Problem Euler 1

var colWithItems =[];

for (var i = 1; i < 1000; i++) {
	if ((i%3==0)||(i%5==0)){
		colWithItems.push (i);		
	}
};

var sum =0;

for (var i = 0,  j=colWithItems.length; i < j; i++) {
	sum += colWithItems[i];
};

console.log ("La suma es: "+sum)


 var ageGroup = {
 	30: "Children", 
 	100:"Very Old",
 	hola :2
 };
console.log(ageGroup["30"]) // Children
console.log(ageGroup.hola) // Children
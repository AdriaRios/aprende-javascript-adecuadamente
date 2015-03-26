// Higher-order functions

function greaterThan(n) {
	console.log ("N: "+n);
  return function(m) {
  console.log ("M: "+m); 
  	return m > n; 
  };
}
console.log ("CREO EL "+greaterThan10);
var greaterThan10 = greaterThan(10);
console.log ("CREO EL 11");
console.log(greaterThan10(11));
console.log ("CREO EL 11");
console.log(greaterThan10(9));
/*
Pasar métodos por parámetro y llamarlos
*/

//Example 1
function writeCode(callback) {
	// do something...
	callback();
// ...
}
function introduceBugs() {
	// ... make bugs
	console.log("BUG, A TODO!");
}
writeCode(introduceBugs);
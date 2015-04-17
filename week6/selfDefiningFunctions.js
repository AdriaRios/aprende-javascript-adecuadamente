var scareMe = function () {
	console.log("Boo!");
	scareMe = function () {
		console.log("Double boo!");
	};
};
// using the self-defining function
scareMe(); // Boo!
scareMe(); // Double boo!

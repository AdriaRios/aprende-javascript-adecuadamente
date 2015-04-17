var setup = function () {
	console.log(1);
	return function () {
		console.log(2);
	};
};
// using the setup function
var my = setup(); // alerts 1
my(); // alerts 2


// antipattern
// for illustration only
// global functions
function foo() {
	console.log('global foo');
}
function bar() {
	console.log('global bar');
}
function hoistMe() {
	console.log(typeof foo); // "function"
	console.log(typeof bar); // "undefined"
	foo(); // "local foo"
	bar(); // TypeError: bar is not a function
	// function declaration:
	// variable 'foo' and its implementation both get hoisted
	function foo() {
		console.log('local foo');
	}
	// function expression:
	// only variable 'bar' gets hoisted
	// not the implementation
	var bar = function () {
		console.log('local bar');
	};
}

hoistMe();
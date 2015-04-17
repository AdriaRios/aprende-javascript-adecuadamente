var add = function (x, y) {
	return x + y;
};
// full application
add.apply(null, [5, 4]); // 9
// partial application
var newadd = add.partialApply(null, [5]);
// applying an argument to the new function
newadd.apply(null, [4]); // 9
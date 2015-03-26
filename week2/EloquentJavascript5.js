var arrays = [[1, 2, 3], [4, 5], [6]];
console.log ("Array PRE: "+arrays);
console.log ("Length PRE: "+arrays.length);

var arrays2=arrays.reduce(function(prev, cur, index, array){
	return prev.concat(cur);
});

console.log ("Array POST: "+arrays2);
console.log ("Length POST: "+arrays2.length);


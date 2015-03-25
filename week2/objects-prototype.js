//Example objects with prototype

function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	console.log(this.name);
};
var person1 = new Person();
var person2 = new Person();

person1.name = "Greg";
console.log("Person1: "+person1.name); //”Greg” - from instance
console.log("Person2: "+person2.name); //”Nicholas” - from prototype
delete person1.name;
console.log("Person1: "+person1.name);


//Example Object.keys(...)
function Person(){
}
Person.prototype = {
	name : "Nicholas",
	age : 29,
	job : "Software Engineer",
	sayName : function () {
		console.log(this.name);
	}
};
var keys = Object.keys(Person.prototype);
console.log(keys); //”name,age,job,sayName”
var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys = Object.keys(p1);
console.log(p1keys); //”name,age”

//Combining Constructor and Prototyoe Patter

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.friends = ["Shelby", "Court"];
}
Person.prototype = {
constructor: Person,
sayName : function () {
console.log(this.name);
}
};
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
console.log(person1.friends); //”Shelby,Court,Van”
console.log(person2.friends); //”Shelby,Court”
console.log(person1.friends === person2.friends); //false
console.log(person1.sayName === person2.sayName); //true


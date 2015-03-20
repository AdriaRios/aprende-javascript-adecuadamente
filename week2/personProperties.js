//En este ejemplo, se especifica que la var "name" no puede ser editada
var person = {};
Object.defineProperty(person, "name", {
	writable: false,
	value: "Nicholas"
	});
console.log(person.name); //"Nicholas"
person.name = "Greg";
console.log


(person.name); //"Nicholas"


//En este ejemplo se especifica la función set y get de la propiedad "year"
var book = {
	_year: 2004,
	edition: 1
};
Object.defineProperty(book, "year", {
	get: function(){
		return this._year;
	},
	set: function(newValue){
		if (newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});
book.year = 2005;
console.log("Old: "+book.edition); //2

//Version más moderna, hay algunos navegadores que no dan sorporte
var book = {
	_year: 2004,
	edition: 1
};
//legacy accessor support
book.__defineGetter__("year", function(){
	return this._year;
});

book.__defineSetter__("year", function(newValue){
	if (newValue > 2004) {
		this._year = newValue;
		this.edition += newValue - 2004;
	}
	});
book.year = 2005;
console.log("New: "+book.edition); //2
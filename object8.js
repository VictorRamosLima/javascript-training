var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var Animal = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype = {
  toString: function() { return this.firstName + ' ' + this.lastName; }
}

var mark = new Person("Mark", "Miller");
console.log(mark instanceof Person);
console.log(mark instanceof Animal);
mark.__proto__ = Animal.prototype;
console.log(mark instanceof Animal);

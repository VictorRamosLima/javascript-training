var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype = {
  toString: function() { return this.firstName + ' ' + this.lastName; }
}

var mark = new Person("Mark", "Miller");
console.log(mark.toString()); // "Mark Miller"

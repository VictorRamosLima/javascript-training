var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function newObject(func) {
  // get an Array of all the arguments except the first one
  var args = Array.prototype.slice.call(arguments, 1);

  // create a new object with its prototype assigned to func.prototype
  var object = Object.create(func.prototype);

  // invoke the constructor, passing the new object as 'this'
  // and the rest of the arguments as the arguments
  func.apply(object, args);

  // return the new object
  return object;
}

var brendan = newObject(Person, "Brendan", "Eich");
console.log(brendan instanceof Person);

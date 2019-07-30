var Person = function(firstName, lastName) {
  var privateFunction = function() {
    console.log("privada");
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.public = function() {
    privateFunction();
  }
}

// lembrar do PROBLEMA de esquecer de invocar ()
var bruno = new Person();
bruno.public();

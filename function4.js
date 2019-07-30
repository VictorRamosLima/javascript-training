var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}


var animal = {
  name: "Rufus",
  hello: function(thing) {
    console.log("Au");
  }
}


var bind = function(func, thisValue) {
  return function() {
    return func.apply(thisValue, arguments);
  }
}

var helloBoundedToPerson = bind(person.hello, person);
helloBoundedToPerson("world") // "Brendan Eich says hello world"
var helloBoundedToAnimal = bind(animal.hello, animal);
helloBoundedToAnimal("world") // "Brendan Eich says hello world"


// EXEMPLO PRATICO
// $("#some-div").click(person.hello.bind(person));

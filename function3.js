var person = {
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

var helloBoundedToPerson = function(thing) { return person.hello.call(person, thing); }

helloBoundedToPerson("world");

function hello(argument) {
  console.log(argument);
  this.yo();
}

var dude = {
  yo: function() { console.log("yo") }
}

// desugars to:
hello.call(dude, "world");

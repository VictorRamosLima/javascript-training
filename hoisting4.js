// function joga a declaração e a assimilação para cima
function test() {
  foo();
  bar();
  var foo = function () {
    console.log("foo");
  }
  function bar() {
    console.log("bar");
  }
}
test();


// function joga a declaração e a assimilação para cima
function test() {

  var foo = function () {
    console.log("foo");
    bar();
  }
  var bar = function() {
    console.log("bar");
  }
  foo();
}

function foo() {
  bar();
  var x = 1;
}

// is actually interpreted like this:

function foo() {
  var x;
  bar();
  x = 1;
}

// If you don't declare your local variables with the var keyword, they are part of the global scope
var name = "Michael Jackson";

function showCelebrityName () {
  console.log (name);
}

function showOrdinaryPersonName () {
  name = "Johnny Evers";
  console.log (name);
}
showCelebrityName (); // Michael Jackson

// name is not a local variable, it simply changes the global name variable
showOrdinaryPersonName (); // Johnny Evers

// The global variable is now Johnny Evers, not the celebrity name anymore
showCelebrityName (); // Johnny Evers

// The solution is to declare your local variable with the var keyword
function showOrdinaryPersonName () {
  var name = "Johnny Evers"; // Now name is always a local variable and it will not overwrite the global variable
  console.log (name);
}

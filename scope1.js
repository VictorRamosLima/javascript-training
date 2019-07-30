var name = "Richard";
// the blocks in this if statement do not create a local context for the name variable
if (name) {
  name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here
  console.log (name); // Jack: still the global variable
}

// Here, the name variable is the same global name variable, but it was changed in the if statement
console.log (name); // Jack


// var name = "Richard";

// function showName () {
//   var name = "Jack"; // local variable; only accessible in this showName function
//   console.log (name); // Jack
// }
// console.log (name); // Richard: the global variable

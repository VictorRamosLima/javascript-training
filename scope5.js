//Demonstration of variables that are in the Global
// Both firstName variables are in the global scope, even though the second one is surrounded by a block {}.
var firstName = "Richard";
{
var firstName = "Bob";
}

// To reiterate: JavaScript does not have block-level scope

// The second declaration of firstName simply re-declares and overwrites the first one
console.log (firstName); // Bob

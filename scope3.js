//Local Variables Have Priority Over Global Variables in Functions
var name = "Paul";

function users () {
  // Here, the name variable is local and it takes precedence over the same name variable in the global scope
var name = "Jack";

// The search for name starts right here inside the function before it attempts to look outside the function in the global scope
console.log (name);
}

users (); // Jack

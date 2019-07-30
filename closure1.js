//A closure is an inner function that has access to the outer (enclosing) function’s variables

function showName(firstName, lastName) { 
  var nameIntro = "Your name is ";
  // this inner function has access to the outer function's variables, including the parameter
  function makeFullName() { 
    return nameIntro + firstName + " " + lastName; 
  }

  return makeFullName(); 
} 

showName("Michael", "Jackson"); // Your name is Michael Jackson 

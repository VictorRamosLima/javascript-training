var man = Object.create(null);
man.sex = "male";

var yehuda = Object.create(man);
yehuda.firstName = "Yehuda"
yehuda.lastName = "Katz"

yehuda.sex       // "male"
yehuda.firstName // "Yehuda"
yehuda.lastName  // "Katz"

console.log(Object.getPrototypeOf(yehuda)) // returns the man object
console.log(yehuda.__proto__) // returns the man object

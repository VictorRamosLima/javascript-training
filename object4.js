var person = Object.create(null);

// instead of using defineProperty and specifying writable,
// configurable, and enumerable, we can just assign the
// value directly and JavaScript will take care of the rest
person['fullName'] = function() {
  return this.firstName + ' ' + this.lastName;
};

// this time, let's make man's prototype person, so all
// men share the fullName function
var man = Object.create(person);
man['sex'] = "male";

var yehuda = Object.create(man);
yehuda['firstName'] = "Yehuda";
yehuda['lastName'] = "Katz";

console.log(yehuda.sex)        // "male"
console.log(yehuda.fullName()) // "Yehuda Katz"
// man.test = function() {return 3;};
console.log(yehuda.test());

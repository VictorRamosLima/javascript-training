var obj = { name: 'Viny' };
var nullobj = Object.create(null)

for (prop in obj) {
  console.log(prop);
}

console.log(obj.__proto__);

obj.toString();
// nullobj.toString();

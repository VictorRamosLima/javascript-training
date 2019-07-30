var person = Object.create(null);

Object.defineProperty(person, 'firstName', {
  value: "Yehuda",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: "Katz",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'secret', {
  value: "segredo",
  writable: true,
  enumerable: false,
  configurable: true
});

for(property in person) {
  console.log(person[property]);
}

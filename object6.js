var obj = { name: 'Viny' };
var objFilho = Object.create(obj);
objFilho.idade = 43;


for (prop in objFilho) {
  console.log(prop);
}

console.log("---")

for (prop in objFilho) {
  if (objFilho.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

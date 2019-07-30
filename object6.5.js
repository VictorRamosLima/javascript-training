Array.prototype.SumArray = function (arr) {
    var sum = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            sum.push(this[i] + arr[i]);
        }
    }
    return sum;
}

var carros = ['bmw', 'savero', 'fusca'];

for (indice in carros) {
  console.log(indice);
}

carros.forEach(function(carro, i) {
  console.log(carro);
});

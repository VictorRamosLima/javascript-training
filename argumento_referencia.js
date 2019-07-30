var numero = 3;
var pessoa = {
  nome: 'Vinícius',
  idade: 43
};

function modificarValor(arg) {
  arg = 400;
}

function modificarPropriedade(arg) {
  arg.idade = 400;
}


function modificarPropriedade2(arg) {
  arg = { idade: 555};
}


modificarValor(numero);
modificarValor(pessoa.idade);
console.log(numero);
console.log(pessoa.idade);

modificarPropriedade(pessoa);
console.log(numero);
console.log(pessoa.idade);

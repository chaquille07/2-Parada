let produtos = [
  { nome: 'Camiseta', preco: 20 },
  { nome: 'Celular', preco: 500 },
  { nome: 'Caneca', preco: 10 }
];

const acharPreco = (price, arrayProdutos) => {
  return arrayProdutos.filter((produtos) => produtos.preco >= price)
}
acharPreco(20, produtos)
console.log(acharPreco(20, produtos))

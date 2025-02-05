let itens = [
  { nome: 'Camiseta', preco: 20 },
  { nome: 'Celular', preco: 500 },
];

let quantidades = [3, 1];

const precoTotal = (arrayProdutos, arrayQuantidades) => {
  // console.log('dentro da função: ', arrayProdutos)
  // console.log('dentro da função: ', arrayQuantidades)

  return arrayProdutos.map((produto, index) => {
    let precoVenda = produto.preco * arrayQuantidades[index]
    return{
      nome: produto.nome,
      preco: produto.preco,
      valorTotal: precoVenda
    }
  })
}

precoTotal(itens, quantidades)
console.log(precoTotal(itens, quantidades))

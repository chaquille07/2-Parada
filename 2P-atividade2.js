let produtos = [
  { nome: 'Camiseta', categoria: 'Roupas' },
  { nome: 'Celular', categoria: 'Eletrônicos' },
];

combinarProdutos(produtos, precos)
// console.log(combinarProdutos(produtos, precos))

const buscarProdutoPorCategoria = (categoria) => {
  // console.log('dentro da função: ', categoria)
  // console.log('dentro da função: ', arrayProdutos)
  return arrayProdutos.filter((produto) => produto.categoria === categoria)
}

buscarProdutoPorCategoria('Eletrônicos', produtos)

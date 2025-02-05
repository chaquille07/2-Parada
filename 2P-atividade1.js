let produtos = [
    { nome: 'Camiseta', categoria: 'Roupas' },
    { nome: 'Celular', categoria: 'Eletrônicos' },
  ];

  let precos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
  ];

  // console.log(precos[1].preco)
  // console.log(produtos[0].nome)

  // atividade-01
  const combinarProdutos = (produtos, precos) => {
    return produtos.map((produto) => {
      let precoProduto = precos.find((preco) => preco.nome === produto.nome)

      return {
        nome: produto.nome,
        categoria: produto.categoria,
        preco: preco.Produto.preco,
      }
    })
  }

  combinarProdutos(produtos, precos)
  console.log(combinarProdutos(produtos, precos))


//1 Atividade

let produtos1 = [
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

  combinarProdutos(produtos1, precos)
  console.log(combinarProdutos(produtos1, precos))


//2 Atividade

let produtos2 = [
    { nome: 'Camiseta', categoria: 'Roupas' },
    { nome: 'Celular', categoria: 'Eletrônicos' },
  ];
  
  combinarProdutos(produtos2, precos)
  // console.log(combinarProdutos(produtos, precos))
  
  const buscarProdutoPorCategoria = (categoria) => {
    // console.log('dentro da função: ', categoria)
    // console.log('dentro da função: ', arrayProdutos)
    return arrayProdutos.filter((produto) => produto.categoria === categoria)
  }
  
  buscarProdutoPorCategoria('Eletrônicos', produtos2)

  
//3 Atividade

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

  
//4 Atividade

let produtos3 = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];
  
  const acharPreco = (price, arrayProdutos) => {
    return arrayProdutos.filter((produtos) => produtos.preco >= price)
  }
  acharPreco(20, produtos3)
  console.log(acharPreco(20, produtos3))
  
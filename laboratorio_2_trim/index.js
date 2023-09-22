const produtos = [

    { nome: 'Laptop', preco: 1000, quantidade: 5 },
    
    { nome: 'Mouse', preco: 20, quantidade: 10 },
    
    { nome: 'Teclado', preco: 30, quantidade: 8 }
    
    ];
    
    function calcularValorTotalEstoque(produtos){
        let valorTotal = 0; 
        for (let i=0; i < produtos.length; i++){
            const produto = produtos[i];
            valorTotal += produto.preco * produto.quantidade;
        }
        return valorTotal;
    }
    
    const valorTotal = calcularValorTotalEstoque(produtos);
    
    console.log('Valor total do estoque:', valorTotal);
    let resposta1 = document.querySelector('#resposta1');
    let iniciar1 = document.querySelector('#iniciar1');
    iniciar1.addEventListener('click',function(){
        resposta1.innerHTML= valorTotal;
    }); 
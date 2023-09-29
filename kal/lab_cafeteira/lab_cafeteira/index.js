let total= 0
let carrinho= []
const addChart = product => {
    carrinho.push(product)
}
const addProductList = (selector, product) => {
        const listaItensDOM = document.querySelector(selector)
        listaItensDOM.innerHTML += `<li> ${produto.nome}</li>` 
}
function Item(nome, preco){
    this.nome = nome
    this.preco = parseFloat(preco.substr(2, preco.lenght))
}
const updateDisplay = (selector, value) => {
    const valorTotalDOM = document.querySelector(selector)
    valorTotalDOM.innerHTML = value;
}
const item = document.querySelectorAll(".item")
item.forEach(item => {
    item.addEventListener("click", () => {
        const nomeItem = item.querySelector("nomeItem").textContent
        const precoItem = item.querySelector(".item-price").textContent
        const produto = new Item(nomeItem, precoItem)
        console.log(`produto escolhido:${produto}`)
        addChart(produto);
        addProductList(".itens", produto)
        
        total += produto.preco;
        updateDisplay(".total", total)
        const valorTotalDOM = document.querySelector(".total")

    })
})

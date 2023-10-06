const carrinhoLista = document.querySelector('.itens');
const totalCarrinho = document.querySelector('.total');
const buttonLimpar = document.querySelector('.limpar');
const itensMenu = document.querySelectorAll('.item');

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho')) || [];
let valorTotal = parseFloat(localStorage.getItem('valorTotal')) || 0;

itensMenu.forEach((item) => {
    item.addEventListener('click', () => {
        const nomeItem = item.querySelector('figcaption').textContent;
        const precoItem = parseFloat(item.querySelector('span').textContent.replace('R$', ''));
        carrinhoCompras.push({ nome: nomeItem, preco: precoItem });
        valorTotal += precoItem;
        atualizarCarrinho();
        localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras));
        localStorage.setItem('valorTotal', valorTotal.toFixed(2));
    });
});

buttonLimpar.addEventListener('click', () => {
    carrinhoCompras = [];
    valorTotal = 0;
    atualizarCarrinho();
    localStorage.removeItem('carrinho');
    localStorage.removeItem('valorTotal');
});

function atualizarCarrinho() {
    carrinhoLista.innerHTML = '';
    let listaItens = '';

    for (let i = 0; i < carrinhoCompras.length; i++) {
        const item = carrinhoCompras[i];
        listaItens += `${i + 1}. ${item.nome} - R$${item.preco.toFixed(2)}<br>`;
    }
    carrinhoLista.innerHTML = listaItens;
    totalCarrinho.textContent = `Total: R$${valorTotal.toFixed(2)}`;
}
atualizarCarrinho();

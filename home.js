// ====================================== AUTOSCROLLERS =============================================== //

function scrollPromocao() {
  let catPromocao = document.querySelector(`div#cat-`)
  catPromocao.scrollIntoView(true)
}

function scrollEntradas() {
  let catEntradas = document.querySelector('div#cat-entradas')
  catEntradas.scrollIntoView(true)
}

function scrollTemaki() {
  var catTemaki = document.querySelector('div#cat-temaki')
  catTemaki.scrollIntoView(true)
}

function scrollHoll() {
  var catHoll = document.querySelector('div#cat-holl')
  catHoll.scrollIntoView(true)
}

// ================================================== MODAL =========================================== //
const modal = document.querySelector('.container-modal')

const switchModal = () => {
  const actualStyle = modal.style.display
  if (actualStyle == 'block') {
    modal.style.display = 'none'
    let imagemModal = document.querySelector('.container-imagem-modal')
    let nomeModal = document.querySelector('.container-nome-modal')
    let descricaoModal = document.querySelector('.container-descricao-modal')
    let valorUnitModal = document.querySelector('#valor-unit-modal')
    while (nomeModal.firstChild) {
      nomeModal.removeChild(nomeModal.firstChild)
    }
    while (imagemModal.firstChild) {
      imagemModal.removeChild(imagemModal.firstChild)
    }
    while (descricaoModal.firstChild) {
      descricaoModal.removeChild(descricaoModal.firstChild)
    }
    while (valorUnitModal.firstChild) {
      valorUnitModal.removeChild(valorUnitModal.firstChild)
    }
  } else {
    modal.style.display = 'block'
  }
}

window.onclick = function (event) {
  let btnVoltar = document.querySelector('#btn-voltar')
  if (event.target == modal || event.target == btnVoltar) {
    switchModal()
  }
}

// ===================================== PASSAGEM DE DADOS MODAL -> LISTA DE PEDIDO =========================================================
const listaPedido = document.querySelector('div.listapedido')
const btnAdicionar = document.querySelector('#btn-adicionar') 

btnAdicionar.addEventListener('click', ()=>{
  
  const modalAberto = document.querySelector('.conteudo-modal')
  /// ======================= CRIANDO A DIV DE CADA PRODUTO =========================
    let divItemBloco = document.createElement('div')
    divItemBloco.className = 'itembloco'
    let liItemTitle = document.createElement('li')
    liItemTitle.className = 'itemtitle'
    let divItemInfo = document.createElement('div')
    divItemInfo.className = 'iteminfo'
    let liItemQuantidade = document.createElement('li')
    liItemQuantidade.id = 'itemquantidade'
    let liItemPreco = document.createElement('li')
    liItemPreco.id = 'itempreco'
    let divItemBtnSet = document.createElement('div')
    divItemBtnSet.className = 'itembtnset' 
    let btnRemover = document.createElement('button')
    btnRemover.className = 'itembtn'  
    btnRemover.innerHTML = '<span>Remover</span>'
  
    
    divItemBtnSet.appendChild(btnRemover)
    divItemInfo.appendChild(liItemQuantidade)
    divItemInfo.appendChild(liItemPreco)
    divItemBloco.appendChild(liItemTitle)
    divItemBloco.appendChild(divItemInfo)
    divItemBloco.appendChild(divItemBtnSet)
    
    listaPedido.appendChild(divItemBloco)


 // pegando o valor unitário do produto e convertendoi ele para numero
  let precoProdutoModal = modalAberto.querySelector('.preco-produto').textContent
  precoProdutoModal = precoProdutoModal.replace('R$', '')
  precoProdutoModal = precoProdutoModal.replace(',', '.')

  precoProdutoModal = round(precoProdutoModal)

// PEGANDO O NOME DO PRODUTO
  let nomeProduto = modalAberto.querySelector('.container-nome-modal h5').textContent
  liItemTitle.innerText = nomeProduto

 // colocando um valor no Valortotal no modal

  
  let quantidadeModal = modalAberto.querySelector('#quantidade')
  let quantidade = quantidadeModal.value
  liItemQuantidade.innerText = 'Quantidade: ' + quantidade
  
  
  let precoTotal = precoProdutoModal*quantidade
  precoTotal = round(precoTotal)
  liItemPreco.innerText = 'Preço: R$' + precoTotal

      // ADICIONANDO FUNCAO DE REMOVER O PROPRIO BOTAO
  btnRemover.addEventListener('click', (event)=>{
    let cardProdutoCarrinho = divItemBloco
    somarTotalPedido(Math.abs(precoTotal) * -1)
    cardProdutoCarrinho.remove()
  })
  

  somarTotalPedido(precoTotal)

  switchModal()
})

let valorTotalPedido = 10;
function somarTotalPedido(precoProduto){
  precoProduto = round(precoProduto)
  valorTotalPedido = round(valorTotalPedido + precoProduto)
  document.querySelector('#totalpedidocarrinho').innerText = valorTotalPedido
}

function round(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

// =================================================== GERAR O CONTEUDO DO MODAL ==============================================================

var cardsProdutos = document.getElementsByClassName('card-produto')

for (let i = 0; i < cardsProdutos.length; i++) {
  cardsProdutos[i].addEventListener('click', function (event) {
    
      let cardProduto = event.currentTarget //div do card

      let imagemDoCard = cardProduto.querySelector('.imagem-produto img')
      let nomeDoCard = cardProduto.querySelector('.texto-produto h5')
      let descricaoDoCard = cardProduto.querySelector('.descricao-produto').innerHTML // <==== NOVO
      let valorUnitDoCard = cardProduto.querySelector('span.preco-produto') // <==== NOVO

      let imagemDoCardClone = imagemDoCard.cloneNode(true)
      let nomeDoCardClone = nomeDoCard.cloneNode(true)
      let valorUnitDoCardClone = valorUnitDoCard.cloneNode(true) // <==== NOVO

      let containerImagemModal = document.querySelector('.container-imagem-modal')
      let containerNomeModal = document.querySelector('.container-nome-modal')
      let containerDescricaoModal = document.querySelector('.container-descricao-modal')
      let containerValorUnitModal = document.querySelector('#valor-unit-modal') // <==== NOVO

      containerImagemModal.appendChild(imagemDoCardClone)
      containerNomeModal.appendChild(nomeDoCardClone)
      containerDescricaoModal.append(descricaoDoCard) // <==== NOVO
      containerValorUnitModal.appendChild(valorUnitDoCardClone) // <==== NOVO

      switchModal()
    },
    false
  )
}

// ================================ GAVETA ================================

const pagina = document.querySelector('#container-principal')
const sideNav = document.getElementById('mySidenav')

function openNav() {
  sideNav.style.width = '18rem'
}

function closeNav() {
  sideNav.style.width = '0'
}

// ========================================================================

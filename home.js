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
const btnAdicionar = document.querySelector('#btn-adicionar') // <---- corrigir 

btnAdicionar.onclick = function (event) {
  
const modalAberto = document.querySelector('.conteudo-modal')
  
  let divItemPedido = document.createElement('div')
  divItemPedido.style.setProperty('border', 'solid 3px black')
  divItemPedido.style.setProperty('margin-bottom', '5%')

  let tituloModal = modalAberto.querySelector('.container-nome-modal h5')
  let quantidadeModal = modalAberto.querySelector('input#quantidade-modal').value
  let valorUnitlModal = modalAberto.querySelector('span.preco-produto').innerHTML.replace('R$ ', '').replace(',', '.')
  
  let valorTotal = (quantidadeModal * valorUnitlModal).toFixed(2)

  // let valorTotalModal = modalAberto.querySelector('div#valor-total-modal').innerHTML

  // console.log(valorUnitlModal)

  // let itemTitulo = document.querySelector('.itemtitle')
  // let itemQuantidade = document.querySelector('#itemquantidade')
  // let itemPreco = document.querySelector('#itempreco')

  // listaPedido.append(divItemPedido)
  // divItemPedido.append(nomeDoCardClone)
  switchModal()
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

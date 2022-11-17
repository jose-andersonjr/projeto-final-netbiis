function scrollPromocao() {
    let catPromocao = document.querySelector("div#cat-promocao");
    catPromocao.scrollIntoView(true);
}

function scrollEntradas() {
    let catEntradas = document.querySelector("div#cat-entradas");
    catEntradas.scrollIntoView(true);
}

function scrollTemaki() {
    var catTemaki = document.querySelector("div#cat-temaki");
    catTemaki.scrollIntoView(true);
}

function scrollHoll() {
    var catHoll = document.querySelector("div#cat-holl");
    catHoll.scrollIntoView(true);
}

// ================================ MODAL ================================ 
const modal = document.querySelector('.container-modal')

const switchModal = () => {

  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
    let imagemModal = document.querySelector('.container-imagem-modal');
    let nomeModal = document.querySelector('.container-nome-modal');
    let descricaoModal = document.querySelector('.container-descricao-modal');
    while (nomeModal.firstChild) {
      nomeModal.removeChild(nomeModal.firstChild);
    }
    while (imagemModal.firstChild) {
      imagemModal.removeChild(imagemModal.firstChild);
    }
    while (descricaoModal.firstChild) {
      descricaoModal.removeChild(descricaoModal.firstChild);
    }
   
  }
  else {
    modal.style.display = 'block'
  }
}
  window.onclick = function(event) {
    let btnVoltar = document.querySelector('#btn-voltar')
  if ((event.target == modal) || (event.target == btnVoltar)) {
    switchModal()
  }
}

// Descobrir pq a função está roubando a imagem para colocar no modal
// Pegar cada elemento da div card-produto referenciando a div que foi clicada, com isso uso as imagens e a descrição do produto que foi clicado, 
// porém, preciso limpar os dados que foram colocados após os produtos serem adicionados

var cardsProdutos = document.getElementsByClassName('card-produto')
for(let i=0; i<cardsProdutos.length; i++){
  cardsProdutos[i].addEventListener('click', function(event) {
    let cardProduto = event.currentTarget //div do card
    let imagemDoCard = cardProduto.querySelector('.imagem-produto img')
    let nomeDoCard = cardProduto.querySelector('.texto-produto h5')
    let descricaoDoCard = cardProduto.querySelector('.descricao-produto')
    descricaoDoCard.style.removeProperty("-webkit-line-clamp")
    let imagemDoCardClone = imagemDoCard.cloneNode(true)
    let nomeDoCardClone = nomeDoCard.cloneNode(true)
    let descricaoDoCardClone = descricaoDoCard.cloneNode(true)
    let containerImagemModal = document.querySelector('.container-imagem-modal')
    let containerNomeModal = document.querySelector('.container-nome-modal')
    let containerDescricaoModal = document.querySelector('.container-descricao-modal')
    containerImagemModal.appendChild(imagemDoCardClone)
    containerNomeModal.appendChild(nomeDoCardClone)
    containerDescricaoModal.appendChild(descricaoDoCardClone)
    switchModal()
  }, false)
}

// ======================================================================= 
/////////////////////////// gaveta lateral /////////////////////////////////
const pagina = document.querySelector('#container-principal')
const sideNav = document.getElementById('mySidenav')

function openNav() {
  sideNav.style.width = '18rem'

}

function closeNav() {
    sideNav.style.width = '0'

  }

///////////////////////////////////////////////////////////////////////////////////////

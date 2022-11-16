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
    let element = document.querySelector('.container-imagem-modal');
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
   
  }
  else {
    modal.style.display = 'block'
  }
}
  window.onclick = function(event) {
  if (event.target == modal) {
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
    let imagemProduto = cardProduto.querySelector('.imagem-produto')
    let imagemProdutoClone = imagemProduto.cloneNode(true)
    let containerImagemModal = document.querySelector('.container-imagem-modal')
    containerImagemModal.appendChild(imagemProdutoClone)
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

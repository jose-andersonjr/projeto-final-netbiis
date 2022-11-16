function scrollPromocao(e) {
    let catPromocao = document.querySelector("div#cat-promocao");
    catPromocao.scrollIntoView(true);
}

function scrollEntradas(e) {
    let catEntradas = document.querySelector("div#cat-entradas");
    catEntradas.scrollIntoView(true);
}

function scrollTemaki(e) {
    var catTemaki = document.querySelector("div#cat-temaki");
    catTemaki.scrollIntoView(true);
}

function scrollHoll(e) {
    var catHoll = document.querySelector("div#cat-holl");
    catHoll.scrollIntoView(true);
}

// ================================ MODAL ================================ 
const modal = document.querySelector('.container-modal')

const switchModal = () => {

  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'

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

    const imagemModal = document.querySelector('.container-imagem-modal')
    let cardProduto = event.currentTarget
    let imagem = cardProduto.querySelector('.imagem-produto')
    modal.append(imagem)
    switchModal()
  }, false)
}

// ======================================================================= 


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
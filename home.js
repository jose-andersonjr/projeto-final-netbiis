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

const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }

  window.onclick = function(event) {
    const modal = document.querySelector('.modal')
  if (event.target == modal) {
    switchModal()
  }
}
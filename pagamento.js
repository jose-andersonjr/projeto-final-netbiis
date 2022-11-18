const modal = document.querySelector('.container-modal')

const switchModal = () => {
  const actualStyle = modal.style.display
  if (actualStyle == 'block') {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'block'
  }
}

const btnEnviarPedido = document.querySelector('button#btn-enviar-pedido')
btnEnviarPedido.addEventListener('click', function () {
  switchModal()
})

const areaDinheiro = document.querySelector('div#div-opcao-dinheiro')
areaDinheiro.addEventListener('click', function () {
  let radioBtnDinheiro = document.querySelector('input#opcao-dinheiro')
  radioBtnDinheiro.checked = true
})

const areaCredito = document.querySelector('div#div-opcao-credito')
areaCredito.addEventListener('click', function () {
  let radioBtnCredito = document.querySelector('input#opcao-credito')
  radioBtnCredito.checked = true
})

const areaDebito = document.querySelector('div#div-opcao-debito')
areaDebito.addEventListener('click', function () {
  let radioBtnDebito = document.querySelector('input#opcao-debito')
  radioBtnDebito.checked = true
})

// =========================== VALIDADOR DE SENHA ========================================= //
const inputSenha = document.querySelector('#senha')
const inputConfirmarSenha = document.querySelector('#confirmarSenha')
const botaoCadastrar = document.querySelector('#btn-alterar')

inputConfirmarSenha.addEventListener('keyup', () => {
  validarSenha()
})

inputSenha.addEventListener('keyup', () => {
  validarSenha()
})

function validarSenha() {
  let senha = inputSenha.value
  let confirmarSenha = inputConfirmarSenha.value
  if (confirmarSenha.length === 6 && senha.length === 6) {
    if (senha !== confirmarSenha) {
      botaoCadastrar.setAttribute('disabled', 'disabled')
      alert('As senhas não correspondem')
    } else {
      botaoCadastrar.removeAttribute('disabled')
    }
  }
}

botaoCadastrar.addEventListener('mouseenter', () => {
  validarSenha()
})

// ===================================================================================== //

// =========================== AUTOCOMPLETE CPF ========================================= //

const inputCEP = document.querySelector('#input-cep')
const inputCidade = document.querySelector('#cidade')
const inputBairro = document.querySelector('#bairro')
const inputLogradouro = document.querySelector('#logradouro')

// Validar o CEP para permitir apenas números
inputCEP.addEventListener('keypress', (e) => {
  const numeros = /[0-9]/
  const key = String.fromCharCode(e.keyCode)

  if (!numeros.test(key)) {
    e.preventDefault()
    return
  }
})

// Checar se o texto digitado tem o tamanho correto
inputCEP.addEventListener('keyup', (e) => {
  const valorInput = e.target.value.replace('-', '')

  if (valorInput.length === 8) {
    getAddress(valorInput)
  }
})

// Pegar o endereço do cliente
const getAddress = async (cep) => {
  const apiURL = `https://viacep.com.br/ws/${cep}/json/`

  const response = await fetch(apiURL)

  const data = await response.json()

  if (data.erro) {
    alert('CEP inválido, favor insira o CEP corretamente!')
  } else {
    inputCidade.value = data.localidade
    inputBairro.value = data.bairro
    inputLogradouro.value = data.logradouro
  }
}

// ================================= MÁSCARAS DOS CAMPOS =============================== //

window.addEventListener('load', () => {
  document
    .querySelector('#input-telefone')
    .addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{4,5})(\d{4})/)
      e.target.value = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    })

  document.querySelector('#input-cpf').addEventListener('input', function (e) {
    var x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{3})(\d{3})(\d{3})(\d{2})/)
    e.target.value = x[1] + '.' + x[2] + '.' + x[3] + '-' + x[4]
  })

  document.querySelector('#input-cep').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{5})(\d{3})/)
    e.target.value = x[1] + '-' + x[2]
  })
})

// ======================================= GAVETA =========================================== //

const sideNav = document.getElementById('mySidenav')

function openNav() {
  sideNav.style.width = '18rem'
}

function closeNav() {
  sideNav.style.width = '0'
}

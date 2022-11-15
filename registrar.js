// =========================== VALIDADOR DE SENHA ========================================= //
const inputSenha = document.querySelector('#senha')
const inputConfirmarSenha = document.querySelector('#confirmarSenha')
const botaoCadastrar = document.querySelector('#btn-cadastrar')

inputConfirmarSenha.addEventListener('keyup', () => {
    validarSenha()
})

inputSenha.addEventListener('keyup', () => {
    validarSenha()
})


function validarSenha(){
    let senha = inputSenha.value
    let confirmarSenha = inputConfirmarSenha.value
    if((confirmarSenha.length === 6) && (senha.length === 6)){
        if(senha !== confirmarSenha){
            botaoCadastrar.setAttribute("disabled", "disabled")
            alert("As senhas não correspondem")
        }else{
            botaoCadastrar.removeAttribute("disabled")
        }
    }
}

botaoCadastrar.addEventListener('mouseenter', () => {
    validarSenha()
})

// ===================================================================================== //

// =========================== AUTOCOMPLETE CPF ========================================= //

const inputCEP = document.querySelector('#cep')
const inputCidade = document.querySelector('#cidade')
const inputBairro = document.querySelector('#bairro')
const inputLogradouro = document.querySelector('#logradouro')



// Validar o CEP para permitir apenas números
inputCEP.addEventListener("keypress", (e) => {
    const numeros = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if (!numeros.test(key)) {
        e.preventDefault();
        return;
    }
})

// Checar se o texto digitado tem o tamanho correto
inputCEP.addEventListener("keyup", (e) => {
    const valorInput = e.target.value;
    
    if(valorInput.length === 8) {
        getAddress(valorInput);
    }
    
});


// Pegar o endereço do cliente
const getAddress = async (cep) => {

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(apiURL)

    const data = await response.json()

    if (data.erro) {
        alert("CEP inválido, favor insira o CEP corretamente!")
    }else{
        inputCidade.value = data.localidade
        inputBairro.value = data.bairro
        inputLogradouro.value = data.logradouro
    }
};

// ================================================================================ //

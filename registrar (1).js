///////////////////////////// NOVO DOCUMENTO: registrar.js /////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////

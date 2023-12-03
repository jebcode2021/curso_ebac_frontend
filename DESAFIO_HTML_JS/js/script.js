const form = document.getElementById('form-camposAB');
const camposA = document.getElementById('camposA');
const camposB = document.getElementById('camposB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemCamposInvalidos = `O valor do campo A <b>${camposA.value}</b> é menor que o valor do campo B <b>${camposB.value}</b> são inválidos`;
    const mensagemCamposValido = `O valor do campo B <b>${camposB.value}</b> é maior que o valor do campo A <b>${camposA.value}</b> são válidos`;

    const valorA = parseFloat(camposA.value);
    const valorB = parseFloat(camposB.value);

    if (valorB > valorA) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemCamposValido
        containerMensagemSucesso.style.display = 'block';

        camposA.value = '';
        camposB.value = '';
    } else {
        const containerMensagemErro = document.querySelector('.success-message');
        containerMensagemErro.innerHTML = mensagemCamposInvalidos;
        containerMensagemErro.style.display = 'block';
    }
  
    return false;
});










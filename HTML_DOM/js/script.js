const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Você depositou R$ <b>${valorDeposito.value}</b> foi enviado para o cliente: <b>${nomeBeneficiario.value}</b> - número de conta: <b>${numeroContaBeneficiario.value}</b>!`

    formValido = validaNome(nomeBeneficiario.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function() {
    const nomeCompleto = nomeBeneficiario.value;
    const formValido = validaNome(nomeCompleto);
    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
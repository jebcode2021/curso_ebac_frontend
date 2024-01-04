function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro na iteração dos números' + e);
    }
});

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(`Logado com o usuário ${login} e senha ${senha}`)
        }, 3000);
    });
}

// console.log('Início do processamento');
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
// // console.log(funcaoMuitoPesada());
// console.log('Fim do processamento');

async function execucaoPrincipal() {
    console.log('Início do processamento');

    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

    // const resultado = await funcaoMuitoPesadaPromise;
    // console.log(resultado);

    promiseComParametros('jebcode@outlook.com.br', 123456789).then(resultado => {
        console.log(resultado);
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }

    console.log('Fim do processamento');
}

execucaoPrincipal();






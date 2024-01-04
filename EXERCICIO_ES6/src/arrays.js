const redesSociales = ['facebook', 'twitter', 'youtube', 'instagram', 'linkedin'];

for (let i = 0; i < redesSociales.length; i++) {
    console.log("Eu tenho perfil na rede social " + redesSociales[i]);
}

redesSociales.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social ${nomeDaRedeSocial}`);
});

const alunos = ['João', 'Maria', 'José', 'Helena', 'Joana'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: "Front-end"
    }
});

console.log(alunos2);

const jose = alunos2.find(function (item) {
    return item.nome == 'José';
});

console.log(jose);

const indiceDeJose = alunos2.findIndex(function (item) {
    return item.nome == 'José';
});

console.log(indiceDeJose);

alunos2.push({
    nome: 'Jeb',
    curso: 'Back-end'
});

const todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
    return item.curso === 'Front-end';
});

console.log(todosAlunosSaoDeFrontEnd);

const existeAlunoDeBackEnd = alunos2.some(function (item) {
    return item.curso === 'Back-end' && item.curso === 'Front-end';
});

console.log(existeAlunoDeBackEnd);

function filtrarPorBackEnd(aluno) {
    return aluno.curso === 'Back-end';
}

const alunosDeBackEnd = alunos2.filter(filtrarPorBackEnd);

const filtrarPorBackEnd2 = (aluno, indice) => aluno.curso === 'Back-end';

const alunosDeBackEnd2 = alunos2.filter(filtrarPorBackEnd2);

console.log(alunosDeBackEnd);

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function (acumulador, item) {
    acumulador += item;
    return acumulador;
}, 0);

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function (acumulador, item) {
    acumulador.push(item.nome);
    return acumulador;
}, []);

console.log(nomeDosAlunos);

const nomeDosAlunos1 = alunos2.reduce(function (acumulador, item) {
    acumulador += item.nome + ', ';
    return acumulador;
}, '');

console.log(nomeDosAlunos1);


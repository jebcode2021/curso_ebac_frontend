
const alunos = [
    { nome: "Maria", nota: 10 },
    { nome: "João", nota: 7 },
    { nome: "José", nota: 9 },
    { nome: "Antonio", nota: 6 },
    { nome: "Beatriz", nota: 5 },
    { nome: "Camila", nota: 3 },
    { nome: "Amanda", nota: 4 },
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 2 },
    { nome: "Lucas", nota: 1 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(`Aprovados: ${aprovados.length}`);

const reprovados = alunos.filter(aluno => aluno.nota < 6);
console.log(`Reprovados: ${reprovados.length}`);
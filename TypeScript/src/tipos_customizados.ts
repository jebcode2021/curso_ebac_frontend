type aluno = {
    nome: string;
    cursos: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Jeb",
        cursos: ["Angular", "React", "Vue"],
        idade: 27
    },
    {
        nome: "Maria",
        cursos: ["Angular", "React", "Vue"],
        idade: 30
    },
    {
        nome: "João",
        cursos: ["Angular", "React", "Vue"],
        idade: 35
    }
]

alunos.push({
    nome: "Joaquim",
    cursos: ["Angular", "React", "Vue"],
    idade: 40
})

const novoAluno: aluno = {
    nome: "Giovani",
    cursos: ["Angular", "React", "Vue"],
    idade: 26
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}
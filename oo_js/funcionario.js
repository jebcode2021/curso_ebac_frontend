function Pessoa(nome) {
    this.nome = nome;
}

function formatReal(int) {
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}

function Funcionario(nome, cargo, salario) {
    Pessoa.call(this, nome);

    this.cargo = cargo;
    let _salario = parseFloat(salario);
    let salarioAtual = salario;

    this.getSalarioAtual = function () {
        return salarioAtual;
    }

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumentaSalario = function () {
        const novoSalario = _salario * 1.2;
        _salario = novoSalario;
    }

}

function Gerente(nome, salario) {
    salario = "2000000";
    Funcionario.call(this, nome, 'Gerente', salario);

    this.aumentaSalario = function () {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

function Estagiario(nome, salario) {
    salario = "30000"
    Funcionario.call(this, nome, 'Estagiário', salario);

    this.aumentaSalario = function () {
        const novoSalario = this.getSalario() * 1.10;
        this.setSalario(novoSalario);
    }
}

function Programador(nome, salario) {
    salario = "600000";
    Funcionario.call(this, nome, 'Programador', salario);

    this.aumentaSalario = function () {
        const novoSalario = this.getSalario() * 1.2;
        this.setSalario(novoSalario);
    }
}

function Analista(nome, salario) {
    salario = "700000";
    Funcionario.call(this, nome, 'Analista', salario);

    this.aumentaSalario = function () {
        const novoSalario = this.getSalario() * 1.5;
        this.setSalario(novoSalario);
    }
}

const Funcionario1 = new Funcionario('Luiz', 'Design UX/UI', "500000");
const Funcionario2 = new Gerente('João');
const Funcionario3 = new Estagiario('Junior');
const Funcionario4 = new Programador('Jonathan');
const Funcionario5 = new Analista('Senior');

Funcionario1.aumentaSalario();
console.log("Nome: " + Funcionario1.nome + " - Cargo: " + Funcionario1.cargo + " Salário atual R$ " + formatReal(Funcionario1.getSalarioAtual()) + " - Salário: R$ " + formatReal(Funcionario1.getSalario()));

Funcionario2.aumentaSalario();
console.log("Nome: " + Funcionario2.nome + " - Cargo: " + Funcionario2.cargo + " Salário atual R$ " + formatReal(Funcionario2.getSalarioAtual()) + " - Salário: R$ " + formatReal(Funcionario2.getSalario()));

Funcionario3.aumentaSalario();
console.log("Nome: " + Funcionario3.nome + " - Cargo: " + Funcionario3.cargo + " Salário atual R$ " + formatReal(Funcionario3.getSalarioAtual()) + " - Salário: R$ " + formatReal(Funcionario3.getSalario()));

Funcionario4.aumentaSalario();
console.log("Nome: " + Funcionario4.nome + " - Cargo: " + Funcionario4.cargo + " Salário atual R$ " + formatReal(Funcionario4.getSalarioAtual()) + " - Salário: R$ " + formatReal(Funcionario4.getSalario()));

Funcionario5.aumentaSalario();
console.log("Nome: " + Funcionario5.nome + " - Cargo: " + Funcionario5.cargo + " Salário atual R$ " + formatReal(Funcionario5.getSalarioAtual()) + " - Salário: R$ " + formatReal(Funcionario5.getSalario()));
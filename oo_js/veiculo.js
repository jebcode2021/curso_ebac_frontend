function Pessoa(nome) {
    this.nome = nome;
}

function formatReal(int) {
    var tmp = int + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
}

function Cliente(nome, veiculo, valor, mensal, parcelas) {
    Pessoa.call(this, nome);

    this.veiculo = veiculo;
    this.valor = valor;
    this.mensal = mensal;
    this.parcelas = parcelas;

    this.calcular = function () {
        var total = (this.mensal * this.parcelas);
        return total;
    }

    this.mostrar = function () {
        var total = this.calcular();
        var texto = this.nome + " comprou o " + this.veiculo + " por " + total;
        return texto;
    }

}

function Gol(nome, valor, mensal, parcelas) {
    valor = "600000";
    mensal = "50000";
    parcelas = "12";
    Cliente.call(this, nome, "Gol", valor, mensal, parcelas);
}

function Palio(nome, valor, mensal, parcelas) {
    valor = "720000";
    mensal = "60000";
    parcelas = "12";
    Cliente.call(this, nome, "Palio", valor, mensal, parcelas);
}

function Uno(nome, valor, mensal, parcelas) {
    valor = "840000";
    mensal = "70000";
    parcelas = "12";
    Cliente.call(this, nome, "Uno", valor, mensal, parcelas);
}

const Cliente1 = new Gol("João");
const Cliente2 = new Palio("Maria");
const Cliente3 = new Uno("José");

Cliente1.mostrar();
console.log("Nome: " + Cliente1.nome + " - Veículo: " + Cliente1.veiculo + " - Valor de venda: R$ " + formatReal(Cliente1.valor) + " - Mensal: R$ " + formatReal(Cliente1.mensal) + " - Parcelas: " + Cliente1.parcelas + " - Total: R$ " + formatReal(Cliente1.calcular()) + "\n");
Cliente2.mostrar();
console.log("Nome: " + Cliente2.nome + " - Veículo: " + Cliente2.veiculo + " - Valor de venda: R$ " + formatReal(Cliente2.valor) + " - Mensal: R$ " + formatReal(Cliente2.mensal) + " - Parcelas: " + Cliente2.parcelas + " - Total: R$ " + formatReal(Cliente2.calcular()) + "\n");
Cliente3.mostrar();
console.log("Nome: " + Cliente3.nome + " - Veículo: " + Cliente3.veiculo + " - Valor de venda: R$ " + formatReal(Cliente3.valor) + " - Mensal: R$ " + formatReal(Cliente3.mensal) + " - Parcelas: " + Cliente3.parcelas + " - Total: R$ " + formatReal(Cliente3.calcular()) + "\n");

Cliente1.mostrar();
console.log(formatReal(Cliente1.mostrar()) + "\n");

Cliente2.mostrar();
console.log(formatReal(Cliente2.mostrar()) + "\n");

Cliente3.mostrar();
console.log(formatReal(Cliente3.mostrar()) + "\n");
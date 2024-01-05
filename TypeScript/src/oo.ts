class Pessoa {
    nome: string;
    renda?: number;

   constructor(nome: string, renda?: number) {
       this.nome = nome;
       this.renda = renda;
   }

   dizOla(): string {
       return `Olá, meu nome é ${this.nome} disse oi!`;
   }
}

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco(): number {
        return 125;
    }

    private getSaldo(): number {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123);
ContaBancaria.retornaNumeroDoBanco();

console.log(contaDoPedro.numeroConta);
// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico');

// console.log(pikachu.nome); // Pikachu

class Pokemon {

    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico');
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com Choque do Trovão`);
    }
}

const pikachuDoAsh = new Pikachu();
const pikachu = new Pokemon('Pikachu', 'Elétrico');
// pikachu.nome = 'Pikachu';
// pikachu.tipo = 'Elétrico';
// pikachu.atacar('Choque do Trovão');
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();

console.log(pikachu); 
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
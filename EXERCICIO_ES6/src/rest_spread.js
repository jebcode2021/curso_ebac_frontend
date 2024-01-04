// rest
function somar(a, b) {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;

    // arguments.map
    //console.log(arguments);
    // return a + b;
}

console.log(somar(10, 20, 30));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));

// spread

const numeros = [1, 2, 3, 4];

console.log(...numeros);

const timeDeFutebookDeSp = ["São Paulo", "Palmeiras", "Santos", "Corinthians"];
const timeDeFutebookDeRj = ["Flamengo", "Vasco", "Botafogo", "Fluminense"];

const timesDeFutebol = [...timeDeFutebookDeSp, ...timeDeFutebookDeRj];

console.log(timesDeFutebol);

const timesDeFutebol2 = timeDeFutebookDeSp.concat(timeDeFutebookDeRj);

console.log(timesDeFutebol2);

const carroDeJulia = {
    modelo: "Fusca",
    marca: "Volkswagen",
    motor: 1.0
};

const carroJeb = {
    ...carroDeJulia,
    modelo : "Peugoot 2008",
    marca : "Peugoot",
    motor : 1.6
}

console.log(carroJeb);

// desestruturação

const motorDoCarroDaJeb = carroJeb.motor;

console.log(motorDoCarroDaJeb);

const { motor: motorDoCarroDaJeb2 } = carroJeb;
const { motor: motorDoCarroDaJulia } = carroDeJulia;

console.log(motorDoCarroDaJeb2);
console.log(motorDoCarroDaJulia);

const [primeiroTime, segundoTime, ...outrosTimes] = timesDeFutebol;

console.log(primeiroTime);
console.log(segundoTime);
console.log(outrosTimes);



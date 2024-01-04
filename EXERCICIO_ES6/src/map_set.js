let meuMap = new Map();
meuMap.set("nome", "Jeb");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

console.log(meuMap.get("nome"));

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

const cpfs = new Set();

cpfs.add("12345678900");
cpfs.add("12345678901");
cpfs.add("12345678902");

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((cpf) => {
    console.log(cpf);
});

const array = ["Jonathan E. Boza", "Giovani Boza", "Denise Boza", "Marino Boza" , "Jonathan E. Boza"];

const arrayComSet = new Set(array);
const arrayComSet2 = new Set([...array]);

console.log(arrayComSet);
console.log(arrayComSet2);

const arraySemDuplicados = [...arrayComSet2];

console.log(arraySemDuplicados);

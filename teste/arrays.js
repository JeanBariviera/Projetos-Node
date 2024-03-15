let frutas = ["maçã", "banana", "cereja"];
console.log(frutas[1]);

frutas.push("laranja");

frutas.forEach(function(item, indice, array) {
    console.log(item, indice);
});
const frase = prompt("Ingrese una frase:");
const vocales = "aeiouAEIOU";
const contadorVocales = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
};

for (let i = 0; i < frase.length; i++) {
    const caracter = frase[i].toLowerCase();
    if (vocales.includes(caracter)) {
        contadorVocales[caracter]++;
    }
}

let resultado = "";
for (let vocal in contadorVocales) {
    resultado += `La vocal ${vocal} aparece ${contadorVocales[vocal]} veces.\n`;
}

alert(resultado);

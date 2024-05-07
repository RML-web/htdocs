const frase = prompt("Ingrese una frase:");
const vocales = "aeiouAEIOU";
let vocalesEncontradas = "";

for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
        vocalesEncontradas += frase[i];
    }
}

alert(`Las vocales que aparecen en la frase son: ${vocalesEncontradas}`);

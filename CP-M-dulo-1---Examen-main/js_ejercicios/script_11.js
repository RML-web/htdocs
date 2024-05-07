const frase = prompt("Ingrese una frase:");
const vocales = "aeiouAEIOU";
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
        contador++;
    }
}

alert(`En la frase ingresada hay ${contador} vocales.`);

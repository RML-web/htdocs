const frase = prompt("Ingrese una frase:");
const letra = prompt("Ingrese la letra que desea contar:");

// Convertir la frase y la letra a minúsculas para que la búsqueda sea insensible a mayúsculas y minúsculas
const fraseMinusculas = frase.toLowerCase();
const letraMinuscula = letra.toLowerCase();

let contador = 0;

for (let i = 0; i < fraseMinusculas.length; i++) {
    if (fraseMinusculas[i] === letraMinuscula) {
        contador++;
    }
}

alert(`La letra "${letra}" aparece ${contador} veces en la frase.`);

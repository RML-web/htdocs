const numero = parseInt(prompt("Ingrese un número:"));

console.log(`Los divisores de ${numero} son:`);

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
}


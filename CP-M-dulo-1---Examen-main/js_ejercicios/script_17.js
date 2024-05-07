function esPrimo(numero) {
    // Los números menores que 2 no son primos
    if (numero < 2) {
        return false;
    }

    // Iterar desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por i, entonces no es primo
        if (numero % i === 0) {
            return false;
        }
    }

    // Si el número no fue divisible por ningún número entre 2 y su raíz cuadrada, es primo
    return true;
}

const numero = parseInt(prompt("Ingrese un número:"));

if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}


const numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    console.log(`${numero} es divisible por al menos uno de los números: 2, 3, 5 o 7.`);
} else {
    console.log(`${numero} no es divisible por ninguno de los números: 2, 3, 5 o 7.`);
}

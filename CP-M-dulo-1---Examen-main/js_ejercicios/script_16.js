const numero1 = parseInt(prompt("Ingrese el primer número:"));
const numero2 = parseInt(prompt("Ingrese el segundo número:"));

console.log(`Los divisores comunes de ${numero1} y ${numero2} son:`);

for (let i = 1; i <= Math.min(numero1, numero2); i++) {
    if (numero1 % i === 0 && numero2 % i === 0) {
        console.log(i);
    }
}

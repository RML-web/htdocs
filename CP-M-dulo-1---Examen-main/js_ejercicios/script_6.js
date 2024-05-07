const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    document.write(`El primer número (${num1}) es mayor que el segundo número (${num2}).`);
} else if (num2 > num1) {
    document.write(`El segundo número (${num2}) es mayor que el primer número (${num1}).`);
} else {
    document.write("Ambos números son iguales.");
}

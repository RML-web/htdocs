const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor = num1;

if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}

document.write(`El mayor de los tres números es: ${mayor}`);

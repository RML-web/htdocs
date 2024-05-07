function sumar (a, b) {
    return a + b;
}

function restar (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    return a / b;
}

//Pedir operador + - / *

const operador = prompt ("Escribe el operdor + - / *").trim();

const num1 = parseFloat(prompt("Primero número"));
const num2 = parseFloat(prompt("Segundo número"));
const resultado = calcular (operador, num1, num2);

function calcular (op, n1, n2) {
    let resultado = 0;
    if (op === "+"){
        resultado = sumar (n1, n2);
    }
    if (op === "-"){
        resultado = restar (n1, n2);
    }
    if (op === "/"){
        resultado = dividir (n1, n2);
    }
    if (op === "*"){
        resultado = multiplicar (n1, n2);
    }
    return resultado;
}

alert ("El resultado" + calcular(operador, n1, n2));
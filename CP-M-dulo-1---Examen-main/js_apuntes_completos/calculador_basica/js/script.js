function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

// function calcular(op, n1, n2) {
//   let resultado = 0;
//   if (op === "+") {
//     resultado = sumar(n1, n2);
//   } else if (op === "-") {
//     resultado = restar(n1, n2);
//   } else if (op === "*") {
//     resultado = multiplicar(n1, n2);
//   } else if (op === "/") {
//     resultado = dividir(n1, n2);
//   }
//   return resultado;
// }

function calcular(op, n1, n2) {
  if (op === "+") {
    return sumar(n1, n2);
  }
  if (op === "-") {
    return restar(n1, n2);
  }
  if (op === "*") {
    return multiplicar(n1, n2);
  }
  if (op === "/") {
    if (n2 === 0) {
      alert("no se puede dividir entre 0");
      return;
    }
    return dividir(n1, n2);
  }
}
//pedir operador + - / *
const operador = prompt("Escribe el operador (+ - / *").trim();
const num1 = parseFloat(prompt("Primer operando: "));
const num2 = parseFloat(prompt("Segundo operando: "));
const resultado = calcular(operador, num1, num2);

alert("El resultado de la operación es : " + resultado);

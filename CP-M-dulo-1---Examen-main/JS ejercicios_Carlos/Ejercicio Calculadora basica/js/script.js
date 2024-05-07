function suma(n1, n2) {
  const resultado = n1 + n2;
  return resultado;
}
function resta(n1, n2) {
  const resultado = n1 - n2;
  return resultado;
}
function mult(n1, n2) {
  const resultado = n1 * n2;
  return resultado;
}
function div(n1, n2) {
  const resultado = n1 / n2;
  return resultado;
}

const operacion = prompt("Elige si quieres sumar, restar multiplicar o dividir");
const num1 = parseInt (prompt("Elige un número"));
const num2 = parseFloat (prompt("Elige otro número"));

if (operacion == "sumar") {
    alert (suma (num1, num2));
}

else if (operacion == "restar") {
  alert (resta (num1, num2));
} 

else if (operacion == "multiplicar") {
  alert (mult (num1, num2));
}  

else if (operacion == "dividir") {
  if (num2 == 0) {alert ("El número no puede ser 0")}
  alert (div (num1, num2));
} 

else { 
  alert ("No has elegido ");
}
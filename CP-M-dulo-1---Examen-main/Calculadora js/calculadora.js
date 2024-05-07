function sumar(a,b) {
  return a+b;
}
function restar(a,b) {
  return a-b;
}
function multiplicar(a,b) {
  return a*b;
}
function dividir(a,b) {
  return a/b;
}

// pedir operador +-/*
const operador = prompt("Escribe el operador (+ - / * ").trim();
const num1 = parsefloat(prompt("Primer operando: "));
const num2 = parsefloat(prompt("Segundo operando: "));
const resultado = Calcular(operador, num1, num2);


function calcular(op,n1,n2){
  let resultado = 0;
  if(op === "+"){
    resultado = sumar(n1,n2);

  }
  else if(op ==="-"){
    resultado = restar(n1,n2);

  }
  else if(op ==="/"){
    resultado = dividir(n1,n2);

  }
  else if(op ==="*"){
    resultado = multiplicar(n1,n2);

  }
  return resultado;
}
alert("El resultado de la operación es : " + calcular(operador, n1, n2));


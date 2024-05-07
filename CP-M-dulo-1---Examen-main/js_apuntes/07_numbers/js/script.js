const num1 = 20;//number
console.log(num1);
const num2 = "20";
console.log(num2);//string
console.log(num2.charCodeAt(0));//string

//Objeto Math
let resultado;
resultado = Math.PI
resultado = Math.round(2.5)
resultado = Math.ceil(2.3);
resultado = Math.floor(2.8);

resultado = Math.sqrt(144);
resultado = Math.abs(-300);

resultado = Math.pow(2, 32)

console.log(resultado);
resultado = Math.min(5,3.4,12,7,33,22,1);
console.log(resultado);
resultado = Math.max(5,3.4,12,7,33,22,1);
console.log(resultado);
resultado = Math.random(5,3.4,12,7,33,22,1);
console.log(resultado);

//Generar un número aleatorio dentro de un rango
resultado = Math.floor(Math.random() *10)+1
console.log(resultado);

//precedencia de operadores
resultado = 20 + 3 * 6;
resultado = (20 + 3) * 6;

//aplicar uun descuento del 20% a una lista de la compra

resultado = (20 + 34 + 56 + 76 + 8)*1.20
console.log(resultado);

//Incremento y decremento

let puntos = 5;
puntos = puntos + 1;
console.log(puntos);

puntos = puntos + 3;
puntos += 3;

// El operador += está sobrecargado para strings

let saludo = "Hola";
saludo += "qué tal...";
saludo += "es la hora del café!";
console.log(saludo);

let aprendiendo = "desarrollo web";
aprendiendo += "js css...";
aprendiendo += "php sql";
console.log(aprendiendo);

let persona = "documentación";
persona += "dirección";
persona += "trabajo";
persona += "género";
console.log(persona); 

// Conversión de números 

const n1 = "20";
const n2 = "0.3";
const n3 = "uno";
const n4 = 20;
console.log(typeof n1);

 let suma1 = n1 + n4;
 console.log(suma1);

 const n1toNum = Number.parseInt(n1);
 console.log(typeof n1);

 let suma = n1 + n4;
 console.log(suma);

 console.log(Number.parseFloat(n2));
 console.log(Number.parseFloat(n3));


 //como revisar si es un número válido

 console.log(Number.isNaN)(Number.parseFloat(n2));










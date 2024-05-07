const num1 = 2; //number
console.log(num1);
const num2 = "2";
console.log(num2); //string

//Objeto Math
let resultado;
resultado = Math.PI;
resultado = Math.round(2.5);
resultado = Math.ceil(2.3);
resultado = Math.floor(2.8);

resultado = Math.sqrt(144);
resultado = Math.abs(-300);

resultado = Math.pow(2, 64);

resultado = Math.min(5, 3, 4, 12, 7, 33, 22, 1);
resultado = Math.max(5, 3, 4, 12, 7, 33, 22, 1);

resultado = Math.random();
//Generar un numero aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 10) + 1;

//precedéncia de operadores
resultado = 20 + 3 * 6;
resultado = (20 + 3) * 6;

//aplicar un descuento del 20% a una lista de la compra
resultado = (20 + 34 + 56 + 76 + 8) * 1.2;
console.log(resultado);

//Incremento y decremento
let puntos = 5;
// puntos = puntos + 1;
puntos++;
++puntos;

// puntos = puntos - 1;
--puntos;
puntos--;

// puntos = puntos + 3;
puntos += 3;
puntos -= 3;
puntos *= 3;
puntos /= 3;
console.log(puntos);
//El operador += está sobrecargado para strings
let saludo = "Hola ";
saludo += "que tal.. ";
saludo += "es la hora del café!";
console.log(saludo);

//Conversion de números
const n1 = "20s";
const n2 = "0.3€";
const n3 = "uno";
const n4 = 20;

const n1toNum = Number.parseInt(n1);
console.log(typeof n1toNum);

let suma = n1toNum + n4;
console.log(suma);

console.log(Number.parseFloat(n2));
console.log(Number.parseFloat(n3));

//como revisar si es un numero válido
console.log(Number.isNaN(Number.parseFloat(n2)));

//Array como literal
const numeros = [12, 23, 4, 5, 6, 76, 89];
console.log(numeros[3]);

const user = { name: "Mario", color: "red", age: 23, dias: numeros };

const mixed = [12, "Hola", true, null, user, numeros];
console.log(mixed);

//Array desde el constructor
const frutas = new Array("Manzana", "melón", "Piña", "Sandia");
console.log(frutas);

let x;
//obtener valores por índice
x = numeros[0];
x = numeros[0] + numeros[5];
x = `Mi fruta favorita es ${frutas[1]}`;
x = frutas.length;

frutas[1] = "uvas";

x = frutas;
console.log(x)
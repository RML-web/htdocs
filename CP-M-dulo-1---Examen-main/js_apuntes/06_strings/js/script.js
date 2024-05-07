//String representan cadenas de carácteres
//Se pueden crear de 3 formas
const producto = "Monitor de 23 pulgadas";
console.log(typeof producto)
    

//Crear objeto String
const producto2 = new String("Monitor panorámico");
console.log(typeof producto2);

console.log(producto2 instanceof String);
console.log(producto2 instanceof Number);

//Comillas simples o dobles

let producto3 = 'Monitor de "23" pulgadas';
console.log(producto3);

producto3 = 'Moni\ntor de \ "23" pulgadas';

console.log(producto3);
//Concatenar Strings
const producto4 = "Monitor de '23' pulgadas";
const precio = "180€";
// Usando el operador de +

let oferta = producto4 + ", tiene un precio de " + precio;
console.log(oferta);

// Interpolación de variables
oferta = `El ${producto4},
          tiene un precio de ${precio}.
          La suma de 1+2 es = ${1+2}`
console.log(oferta);

//Métodos para strings
const saludo = "Hola caracola, que ase!?";
console.log(saludo.length)

console.log(saludo[0]);
console.log(saludo[saludo.length-1]);

console.log(saludo.indexOf("que"));
console.log(saludo.indexOf("hola"));
console.log(saludo.includes("Hola"));
console.log(saludo.charAt(3));
console.log(saludo.charCodeAt(3));

console.log(saludo.concat("Hoy llueve"));






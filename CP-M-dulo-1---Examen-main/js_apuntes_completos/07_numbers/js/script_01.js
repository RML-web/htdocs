//Strings representan cadenas de carácteres
//Se pueden crear de 3 formas
const producto = "Monitor de 23 pulgadas";
console.log(typeof producto);

//Crear Objeto String
const producto2 = new String("Monitor panorámico");
console.log(typeof producto2);
console.log(producto2 instanceof Number);

//Comillas simples o dobles
let producto3 = 'Monitor de "23" pulgadas';
producto3 = "Monitor de '23' pulgadas";
//escapar carácteres con \
producto3 = 'Moni\n tor de "23" pulgadas';
console.log(producto3);

//Concatenar Strings
const producto4 = "Monitor de '23' pulgadas";
const precio = "180€";

//Usando el operador +
let oferta = "El "+producto4 + ", tiene un precio de " + precio;
//Interpolación de variables
oferta = `El ${producto4},
          tiene un precio de ${precio}.
          La suma de 1 + 2 es = ${1+2}`
console.log(oferta);
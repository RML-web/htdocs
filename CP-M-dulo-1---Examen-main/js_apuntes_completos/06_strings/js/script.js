//Métodos para strings
const saludo = "Hola caracola, que ase!?";
console.log(saludo.length);
console.log(saludo[7]);
console.log(saludo[saludo.length - 1]);
console.log(saludo.indexOf("que"));
console.log(saludo.indexOf("hola"));
console.log(saludo.includes("Hola"));
console.log(saludo.charAt(3));
console.log(saludo.charCodeAt(3));

console.log(saludo.concat(" Hoy llueve", "mucho", "pero mucho"));
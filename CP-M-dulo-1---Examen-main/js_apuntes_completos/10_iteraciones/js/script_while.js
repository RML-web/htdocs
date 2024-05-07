// let contador = 0;
// while (contador < 10) {
//   console.log("Iteración  n: " + contador);
//   // contador = contador + 1;
//   contador++;
// }

const pass = "1234";
let intentos = 0;

let respuesta = prompt("Escribe tu contraseña: ");
intentos++;

while (respuesta !== pass && intentos < 3) {
  respuesta = prompt("Escribe tu contraseña: ");
  intentos++;
}

console.log("Intentos: " + intentos);
if (intentos === 3) {
  document.write("No tienes más intentosgdfg");
} else {
  document.write("Estás logeado yeahhh!!");
}

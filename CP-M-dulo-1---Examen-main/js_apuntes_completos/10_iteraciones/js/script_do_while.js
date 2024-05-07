const pass = "1234";
let intentos = 0;

let respuesta = "";
do {
  respuesta = prompt("Escribe tu contraseña: ");
  intentos++;
} while (respuesta !== pass && intentos < 3);

console.log("Intentos: " + intentos);
if (intentos === 3) {
  document.write("No tienes más intentosgdfg");
} else {
  document.write("Estás logeado yeahhh!!");
}

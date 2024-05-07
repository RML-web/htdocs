//Generar un numero aleatorio dentro de un rango de 1 a 100
const secret = Math.floor(Math.random() * 100) + 1;
console.log(secret);

const NUM_INTENTOS = 5;
let intentos = 0;
let respuesta = "";

do {
  //TODO validar correctamente el rango del número y que sea válido
  /* do {
    respuesta = parseInt(
      prompt("Escribe tu número entre 1 y 100: " + intentos).trim()
    );
    if (isNaN(respuesta)) {
      alert("escribe un numero válido");
    } else if (respuesta < 1 || respuesta > 100) {
      alert("El número debe estar entre 1 y 100");
    }
  } while (isNaN(respuesta) || respuesta < 1 || respuesta > 100);
 */

  while (true) {
    respuesta = parseInt(
      prompt("Escribe tu número entre 1 y 100: " + intentos).trim()
    );
    if (!isNaN(respuesta) && respuesta > 1 && respuesta < 100) {
      break;
    } else {
      alert("escribe un numero válido");
    }
  }

  intentos++;
  //Lógica de ayuda al usuario
  if (respuesta > secret) {
    alert("Te has pasado!");
  }
  if (respuesta < secret) {
    alert("No llegas!");
  }
} while (respuesta !== secret && intentos < NUM_INTENTOS);

console.log("Intentos: " + intentos);
if (intentos < NUM_INTENTOS) {
  document.write("Has ganado yeahhh!!");
} else {
  document.write("No tienes más intentos");
}

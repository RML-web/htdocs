// Generar un número aleatorio entre 1 y 100
let numRandom = Math.floor(Math.random() * 100) + 1;

// Número máximo de intentos permitidos
const intentosMax = 7;

// Iniciar el contador de intentos
let intentos = 0;

// lista de números elegidos por el Usuario
let numerosElegidos = [];

// Obtener el primer input del usuario
let numUser = parseInt(
  prompt(
    `Bienvenido al juego: Te deseo suerte. Tienes máximo${intentosMax} intentos. Introduce un número entre 1 y 100`
  )
);

// Comprobar si el número del usuario es un número válido entre 1 y 100
if (isNaN(numUser) || numUser < 1 || numUser > 100) {
  alert(
    "Por favor, ingresa un número válido entre 1 y 100. El juego ha terminado."
  );
} else {
  // Comienza el bucle de intentos
  for (intentos = 1; intentos <= intentosMax; intentos++) {
    //Agrega el número elegido por el usuario al array
    numerosElegidos.push(numUser);
    // Comparar el número del usuario con el número aleatorio
    if (numUser === numRandom) {
      alert(
        `¡Muy bien, has adivinado el número secreto "${numRandom}" en ${intentos} intentos!`
      );
      break; // Salir del bucle si el usuario adivina
    } else if (numRandom < numUser) {
      // Pedir un número menor
      numUser = parseInt(
        prompt(
          ` El número secreto es menor. Llevas ${intentos} intentos. Números elegidos: ${numerosElegidos.join(
            ", "
          )}`
        )
      );
    } else {
      // Pedir un número mayor
      numUser = parseInt(
        prompt(
          `El número secreto es un  número mayor. Llevas ${intentos} intentos. Números elegidos: ${numerosElegidos.join(
            ", "
          )}`
        )
      );
    }
  }

  // Comprobar si se han agotado los intentos
  if (intentos > intentosMax) {
    alert(
      `No tienes más intentos. El juego ha terminado ${intentosMax} intentos. El número mágico era "${numRandom}". Números elegidos: ${numerosElegidos.join(
        ", "
      )}`
    );
  }
}
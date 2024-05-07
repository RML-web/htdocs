// let contador = 0;
// while (contador < 10) {
//   console.log("Iteración  n: " + contador);
//   // contador = contador + 1;
//   contador++;
// }

//bucle for clásico
// for (let contador = 0; contador < 10; contador++) {
//   console.log("Iteración  n: " + contador);
// }

const texto = "En la granja de Pepito...ia ia oh!";

for (let i = 0; i < texto.length; i++) {
  let letra = texto[i];
  if (letra === "a") {
    console.log(letra + " en la posición: " + i);
  }
}

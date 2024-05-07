//Revisar multiples condiciones
//roles: ADMIN, EDITOR, AUTOR, LECTOR

let rol = "VISITANTE";

if (rol === "ADMIN") {
  console.log("Tienes control total");
} else if (rol === "EDITOR") {
  console.log("Solo puedes editar");
} else if (rol === "AUTOR") {
  console.log("Solo puedes editar tus entradas");
} else if ("LECTOR") {
  console.log("Solo puedes leer");
} else {
  console.log("No tienes cuenta");
}
/*Falsy values. Se evaluan como false: Boolean(xx)
- String vacio
- 0
- undefined
- false
- NaN
*/
let nombre = "";
if (nombre) {
  console.log("Hola " + nombre);
} else {
  console.log("El nombre no és valido");
}

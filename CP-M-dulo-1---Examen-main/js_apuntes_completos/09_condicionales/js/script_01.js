//estructuras condicionales
let haceSol = true;
// if (haceSol) {
//   console.log("Voy a la playa!");
// } else {
//     console.log("Me quedo en casa");
// }

//Si hace sol y hace calor entonces
//voy a la playa
//sinó
//me quedo en casa
const haceCalor = true;
// if(haceSol && haceCalor){
//     console.log("Voy a la playa!");
// }else{
//     console.log("Me quedo en casa");
// }

const tengoHambre = false;
haceSol = false;
hayOlas = true;
// if (haceSol) {
//   console.log("Voy a la playa!");
//   if (hayOlas) {
//     console.log("Hago Surf!!");
//   } else {
//     console.log("Juego a las paletas");
//   }
// } else if (tengoHambre) {
//   console.log("Hago palomitas");
// } else {
//   console.log("Miro una peli");
// }

//Operadores aritméticos + - * / %
//Operadores de comparación == != === !== > < >= <=
//Operadores lógicos && || !

let accion = "";
haceSol = true;
if (haceSol) {
  accion = "Me voy a la playa";
} else {
  accion = "Me quedo en casa";
}

//versión con operador ternario
const accion2 = haceSol ? "Me voy a la playa" : "Me quedo en casa";
console.log(accion2);

console.log("Este codigo SI se ejecuta");

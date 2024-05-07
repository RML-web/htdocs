//estructura condicionales
if (false){
    console.log("Este código se ejecuta");
}

console.log("Este código SÍ se ejecuta");

let haceSol = true;
if (haceSol) {
    console.log("Voy a la playa!");
}

else {
    console.log("Me quedo en casa");
}

//Si hace sol y hace calor entonces
//voy a la playa
//sino
//me quedo en casa

const haceCalor = false;
//if(haceSol && haceCalor){
    console.log("Voy a la playa!");
//}

const tengoHambre = false;
haceSol = false;
if (haceSol) {
    console.log("Voy a la playa!");
} else if(tengoHambre){
    console.log("Hago palomitas");
} else {
    console.log("Miro una peli");
}

//Operadores aritméticos + - * / %
//Operadores de comparación == ! = === > <
//Operadores lógicos && || !

let accion = " ";
if (haceSol) {
    accion = "Me voy a la playa";
} else {
    accion = "Me quedo en casa";
}
console.log(accion);

//versión con operador ternario

const accion2 = haceSol ? "Me voy a la playa" : "Me quedo en casa";
console.log(accion2);

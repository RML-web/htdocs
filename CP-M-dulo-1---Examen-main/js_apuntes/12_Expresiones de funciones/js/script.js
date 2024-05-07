//Declaración de función
function addEuroSign(val) {
     return val + "€";

}
console.log(addEuroSign(180));


//funcion como expresion
const addDolarSign = function (val){
    return val + "$";

};
console.log(addDolarSign(400));

//Arrow function
const suma = function (a, b) {
    return a+b;
};
//el return es implicito
const restar = (a,b) => a-b;

console.log(suma(3,4));

//Se puede omitir el paréntesis si solamente hay un parámetro
const doblar = (a) => a*2;

const saludo = () => "Hola que tal";

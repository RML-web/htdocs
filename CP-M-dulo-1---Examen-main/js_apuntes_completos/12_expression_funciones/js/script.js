console.log(addEuroSign(180));

//Declaracion de funcion
function addEuroSign(val) {
  return val + "€";
}

// console.log(addDolarSign(400));

//funcion como expression
const addDolarSign = function (val) {
  return val + "$";
};

console.log(addDolarSign(400));

//Arrow fucntion
// const suma = function (a, b) {
//   return a + b;
// };
const suma = (a, b) => {
  return a + b;
};
console.log(suma(3, 4));

//el return es implicito
const restar = (a, b) => a - b;
console.log(restar(3, 4));

//Se puede omitir el paréntesis solo si hay un parametro
const doblar = (a) => a * 2;

const saludo = () => "Hola que tal";

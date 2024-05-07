const num1 = 20;
const num2 = "20";
const num3 = 30;

console.log(num1 > num3); //false
console.log(num1 < num3); //true

console.log(num1 >= num3); //false
console.log(num1 <= num3); //true

//un = asigna, NO COMPARA!!!!!
//siempre se evalua a true
// console.log(num1 = num2);

console.log(num1 == num3); //false
console.log(num1 == num2); //true

//igualdad estricta
console.log(num1 === num3); //false
console.log(num1 === num2); //false
console.log(num1 === Number.parseInt(num2)); //true

//Desigualdad
console.log(num1 != num2); //false
console.log(num1 != num3); //true
//Desigualdad estricta
console.log(num1 !== num2); //true

//NULL y undefined
let numero;
console.log(numero);
console.log(typeof numero);

let numero1 = null;
console.log(numero1);
console.log(typeof numero1);

console.log(numero == numero1);
console.log(numero === numero1);

//https://es.javascript.info/comparison


//Operadores lógicos 
let test = true && true;
test = false && true;

test = true || true; //true
test = true || false; //true
test = false || true; //true
test = false || false; //false

test = !test;//invierte el valor
console.log(test);
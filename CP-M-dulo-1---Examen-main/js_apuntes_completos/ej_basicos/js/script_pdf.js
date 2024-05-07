//Ej 1 y 2
// window.alert("Hello World");
// window.console.log("Hello world");
// window.document.write("Hello World");
// alert("Hello World");

//Ej 3
// alert(3 + 5);

//Ej 4
// const nombre = prompt("Escribe tu nombre");
// alert("Hola " + nombre);

//Ej 5
// const num1 = Number.parseFloat(prompt("Escribe un número"));
// const num2 = Number.parseFloat(prompt("Escribe otro número"));
// const suma = num1 + num2;
// alert(suma);

//Ej 6
// const num1 = Number.parseFloat(prompt("Escribe un número"));
// const num2 = Number.parseFloat(prompt("Escribe otro número"));

// if(num1 > num2){
//   alert(num1 + "es mayor");
// }else{
//   alert(num2 + "es mayor");
// }

// const numMayor = num1 > num2 ? num1 : num2;
//  alert(numMayor + "es mayor");

//Ej 7
// const num1 = Number.parseFloat(prompt("Escribe un número"));
// const num2 = Number.parseFloat(prompt("Escribe otro número"));
// const num3 = Number.parseFloat(prompt("Escribe otro número"));

// let numMayor;
// if (num1 >= num2) {
//   if (num1 >= num3) {
//     numMayor = num1;
//   } else {
//     numMayor = num3;
//   }
// } else {
//   if (num2 >= num3) {
//     numMayor = num2;
//   } else {
//     numMayor = num3;
//   }
// }

// if (num1 >= num2 && num1 >= num3) {
//   numMayor = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   numMayor = num2;
// } else {
//   numMayor = num3;
// }
// let numMayor = num1;
// if(num2 > numMayor){
//   numMayor = num2;
// }
// if(num3 > numMayor){
//   numMayor = num3;
// }
// alert(numMayor + "es mayor");
// numMayor = Math.max(num1,num2,num3);
// alert(numMayor + "es mayor");

//Ej 8
// const num1 = Number.parseFloat(prompt("Escribe un número"));
// if(num1 % 2 === 0){
//   alert("Es divisible")
// }else{
//   alert("No es divisible");
// }

// num1 % 2 === 0 ? alert("Es divisible") : alert("No es divisible");

//Ej 9
// const frase = "caracol"//prompt("Dame una frase");
// let numA = 0;
// for(let i = 0;i < frase.length; i++ ){
//     let letra = frase[i];
//     if(letra === 'a'){
//       numA++;
//     }
// }
// console.log("Hay "+numA+ "aes")

//Ej 10
const frase = "caracol"; //prompt("Dame una frase");
const vocales = "aeiouAEIOU";
for (let i = 0; i < frase.length; i++) {
  let letra = frase[i];
  if (vocales.includes(letra)) {
    console.log(letra);
  }
}

//Ej 11
// const frase = "caracol"; //prompt("Dame una frase");
// let numVocales = 0;
// const vocales = "aeiouAEIOU";
// for (let i = 0; i < frase.length; i++) {
//   let letra = frase[i];
//   if (vocales.includes(letra)) {
//     numVocales++;
//   }
// }
// console.log("Hay " + numVocales + " Vocales");

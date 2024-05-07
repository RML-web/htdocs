// function sumar() {
//   console.log(3 + 4);
// }

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

function sumar(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

console.log("Antes de sumar");
// sumar();
// sumar(3, 4);
const resultadoSuma = sumar(3, 4);
console.log(resultadoSuma);
console.log("Después de sumar");

function echo(palabra) {
  return palabra;
}

const saludo = echo("Buenos días");

function firstWord(s = "") {
  let word = "";
  let spaceFind = false;
  for (let i = 0; i < s.length; i++) {
    if (!spaceFind) {
      if (s[i] !== " ") {
        word += s[i];
      } else {
        spaceFind = true;
      }
    }
  }
  return word;
}

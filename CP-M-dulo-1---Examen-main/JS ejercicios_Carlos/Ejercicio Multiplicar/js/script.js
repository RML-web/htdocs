/**
 * Pedir un numero y imprimir su tabla de multiplicar
 * - usar una función con un parámetro
 * - validar la entrada de datos
 * - Bonus: dar la opción de imprimir alrevés
 */
// let numero;
// let invertida = false;
// do {
//   numero = parseInt(prompt("Escribe el numero de la tabla: ").trim());
//   if (isNaN(numero)) {
//     alert("escribe un numero válido");
//   }
// } while (isNaN(numero));
// //confirm para reversed
// invertida = confirm("Quieres invertirla");
// // mostrarTabla(numero);
// // mostrarTablaInvertida(numero);
// multiplicarReversed(numero, invertida);

function mostrarTabla(n) {
  document.write(`<h2>Tabla del ${n}</h2>`);
  for (let i = 1; i <= 10; i++) {
    const resultado = n * i;
    document.write(n + " x " + i + " = " + resultado + "<br>");
  }
}

// function mostrarTablaInvertida(n) {
//   document.write(`<h2>Tabla del ${n}</h2>`);
//   for (let i = 10; i >= 1; i--) {
//     const resultado = n * i;
//     document.write(n + " x " + i + " = " + resultado + "<br>");
//   }
// }

// function multiplicarReversed(num, reversed) {
//   if (reversed) {
//     mostrarTablaInvertida(num);
//   } else {
//     mostrarTabla(num);
//   }
// }

function mostrarTodas () {
  for (let i = 1; i <= 10; i++) {
    mostrarTabla(i);
  }
}

mostrarTodas();
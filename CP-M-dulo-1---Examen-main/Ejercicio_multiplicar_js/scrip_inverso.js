let numero;
do {
    numero = parseInt(
        prompt("Escribe el numero de la tabla: ").trim());
        if (isNaN(numero)){
        alert("escribe un número válido"); 
}
}while (isNaN(numero));

mostrarTabla(numero);

function mostrarTabla(n) {
    document.write (`<h2>Tabla del ${n}</h2>`);
   for (let i = 10; i>=1; i--) {
    const resultado = n * i;
  document.write(n + "x" + i+ " = " + resultado + "<br>");

}
function mostrarTablaInvertida(n) {


}
function multiplicarReversed(num, reversed) {
  if(reversed){
    mostrarTablaInvertida(num);
} else {
  mostrarTabla(num);
}
}
}
//confirm para reversed
invertida = confirm("Quieres invertirla");
//mostrarTabla(numero);
//mostrarTabla

function mostrarTodas() {
  for (let i = 1; i <= 10; i++){
    mostrarTabla(i);
  }
}
mostrarTodas();
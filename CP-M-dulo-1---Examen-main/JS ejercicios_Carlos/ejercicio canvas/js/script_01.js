//Traer una referencia a la etiqueta canvas
const canvas = document.getElementById("myCanvas");

/**
 * @type {CanvasRenderingContext2D} 
 */
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(60,40,30, 30);

ctx.fillStyle = "rgb(100, 100, 200)";
ctx.fillRect(100,10,30, 30);


//Dibujar círculo
ctx.fillStyle = "0000ff";
ctx.beginPath();
ctx.arc(30, 30, 10, 0, 2 * Math.PI);
ctx.fill();
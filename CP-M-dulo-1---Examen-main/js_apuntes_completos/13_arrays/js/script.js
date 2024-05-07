//Métodos de los arrays
const arr = [24, 54, 66, 67, 109];

//Añadir un elemento al final del array
// arr[arr.length] = 200;
arr.push(200, 300, 400);
//Leer la ultima posicion
console.log(arr[arr.length - 1]);
//Quitar el último elemento del array
arr.pop();
//Añadir un elemento al principio del array
arr.unshift(99);
//leer el primer elemento
console.log(arr[0]);
//quitar el primer elemento del array
arr.shift();

//invertir el oreden del array
arr.reverse();
console.log(arr);
//Mirar si contiene un valor
let x;
x = arr.includes(200);
//Devuelve el primer indice si lo encuentra
x = arr.lastIndexOf(201);
arr.toString(); //pasar a texto

x = arr.join("/");
//Devuelve el trozo de array en un array nuevo
x = arr.slice(1, 4);

x = arr.splice(2, 1);

//Algunos métodos se pueden concatenar

x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);

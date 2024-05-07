const coche = {
  color: "rojo",
  puertas: 3,
  marca: "Ferrari",
  motor: {
    potencia: "240cv",
    cilindros: 8,
    combustible: "eléctrico",
  },
};

// let texto = coche.color; //rojo
// texto = "<h1>Tengo un </h1> " + coche.marca + " de color " + coche.color;
let texto = `<h1>Características del ${coche.marca}</h1>
              <ul>
                <li>Color: ${coche.color}</li>
                <li>Puertas: ${coche.puertas}</li>
                <li>Combustible: ${coche.motor.combustible}</li>
              </ul>`;
// console.log(texto)
document.write(texto);

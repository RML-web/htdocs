const personas = [
    {
      id: 1,
      nombre: "Alice",
      edad: 28,
      direccion: {
          ciudad: "Nueva York",
          pais: "Estados Unidos"
      },
      hobbies: ["lectura", "pintura"]
    },
    {
      id: 2,
      nombre: "Bob",
      edad: 35,
      direccion: {
          ciudad: "Londres",
          pais: "Reino Unido"
      },
      hobbies: ["correr", "cocinar"]
  },
  {
      id: 3,
      nombre: "Charlie",
      edad: 22,
      direccion: {
          ciudad: "París",
          pais: "Francia"
      },
      hobbies: ["jardinería", "fotografía"]
  
  },
  {
      id: 4,
      nombre: "David",
      edad: 32,
      direccion: {
          ciudad: "Tokio",
          pais: "Japón"
      },
      hobbies: ["viajar", "programar"]
  },
  {
      id: 5,
      nombre: "Eve",
      edad: 29,
      direccion: {
          ciudad: "Sidney",
          pais: "Australia",
      },
      hobbies: ["ciclismo", "tocar música"]   
  }
  ];

  //reduce
  const numbers = [1, 2, 3, 4, -5, 6, 7, -8, 9, 10];
  const calcularTotal = (array) => {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;

  };
  console.log(calcularTotal(numbers));
  const suma = numbers.reduce((acumulador, elemento) => {
      return acumulador + elemento;

  }, 0);

  console.log(suma);









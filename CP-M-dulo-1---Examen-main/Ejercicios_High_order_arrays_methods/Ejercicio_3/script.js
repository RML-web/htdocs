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





const readingHobbiesPersonas = personas.filter((persona) =>{
    return persona.hobbies.includes("lectura"); //verdadero o falso
    
});
console.log("Personas con hobbies", readingHobbiesPersonas);




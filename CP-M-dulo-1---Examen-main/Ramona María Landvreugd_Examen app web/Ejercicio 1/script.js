const libros = [
    { titulo: "Crónicas marcianas", autor: "Ray Bradbury", leido: true },
    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", leido: false },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido: true },
    { titulo: "El Quijote", autor: "Miguel de Cervantes", leido: false },
  ];
  
  // Recorrer el array de libros
  libros.forEach(libro => {
    let mensajeLeido = libro.leido ? "Ya has leído" : "Aún no has leído";
    console.log(`${mensajeLeido} "${libro.titulo}" de ${libro.autor}`);
  });
  
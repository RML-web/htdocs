const libros = [
    { titulo: "El nombre de la rosa", autor: "Umberto Eco", leido: true, portada:"./libros/libro1.jpg"},
    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", leido: false, portada:"./libros/libro2.jpg" },
    { titulo: "El Quijote", autor: "Miguel de Cervantes", leido: true, portada:"./libros/libro3.png" },
    { titulo: "El camino", autor: "Miguel Delibes", leido: false, portada:"./libros/libro4.jpg" },
  ];
  
  // Recorrer el array de libros
  libros.forEach(libro => {
    let mensajeLeido = libro.leido ? "Ya has leído" : "Aún no has leído";
    console.log(`${mensajeLeido} ${libro.titulo} de ${libro.autor}`);
  });
  function agregarElementos(){

  }
    
  const libro=document.getElementById("libros"); 
  document.createElement("ul")
  const ul = document.createElement("ul")
  libro.appendChild(ul);

  libros.forEach(libro => {
    let mensajeLeido = libro.leido ? "Ya has leído" : "Aún no has leído";
    const examen = `${mensajeLeido} ${libro.titulo} de ${libro.autor}`;
    const li= document.createElement("li")
    li.innerText = examen;
    ul.appendChild(li);
    const imagen = document.createElement("img");
    imagen.setAttribute("src",libro.portada); 
    li.appendChild(imagen);

// Cambio a color rojo los libros que he leído.
    if (libro.leido == true){
     li.style.color = "red";
    }
    
  });
     



  

    // Rellenar el contenido de los spans con tu información
    document.getElementById('nickname').textContent = 'Ramona';
    document.getElementById('favoritos').textContent = 'Examen de app web';
    document.getElementById('ciudad').textContent = 'Palma de Mallorca';

    // Añadir la clase "list-item" a cada li
    const listaElementos = document.querySelectorAll('ul li');
    listaElementos.forEach(elemento => elemento.classList.add('list-item'));

    // Crear un elemento img y añadirlo a la página
    const imagen = document.createElement('img');
    imagen.src = 'foto1.jpg'; 
    imagen.alt = 'Imagen de Ramona';
    document.body.appendChild(imagen);
  
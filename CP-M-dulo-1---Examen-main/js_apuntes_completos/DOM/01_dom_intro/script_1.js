//selectores de un elemento
const titulo = document.getElementById("title");// por Id
//selectores multiples
const items = document.getElementsByTagName('li');//por nombre de la etiqueta
const formControls = document.getElementsByClassName("form-control");

titulo.innerHTML = "Lista de tareas";

//Query selectors -> funcionan con selectores de CSS
document.querySelector("#title")
const primeritem = document.querySelector("li")
const formControls2 = document.querySelector(".form-control");

//Multiples elementos
const botones = document.querySelectorAll(".remove-item");
botones.forEach(function(btn)) {
    btn.classList.remove("text-red");
  console.log(btn);
});
for (cons boton of botones) {
    console.log(boton);
}


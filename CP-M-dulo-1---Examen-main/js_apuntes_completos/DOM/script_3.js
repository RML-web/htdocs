//Obtener los hijos de un elemento
let out;

const listaPadre =document.querySelector("#item-list");
out = listaPadre.childNodes;
out = listaPadre.children;
out = listaPadre.children[0].innerHTML;
out = listaPadre.children[0].textContent;

out= listaPadre.firstElementChild.innerText = "primer hijo";
listaPadre.lastElementChild.innerText = "Ultimo hijo";

//Obtener el padre
const hijo = document.querySelector("#title");
out =hijo.parentElement;

//Obtener los hermanos
2 = document.querySelector("li:nth-child(2)");
2;
const hijo2= document.querySelector("li:nth-child(2)");
hijo2.nextElementSibling.computedStyleMap.background = 

console.log(out);

// crear elementos del DOM
const miDiv = document.createElement("div");
miDiv.ClassName = "mi-clase text-red";
miDiv.id = "mi-id";
miDiv.classList.add("text-big");
miDiv.classList.remove("mi-clase");
miDiv.classList.replace("text-red","text-green");
miDiv.classList.toggle("text-green");
miDiv.setAttribute("title", "soy un div");
const btnClear = document.querySelector(#clear);
btnClear.onclick =  function () { 
    alert ("Adios");

};

btnClear.addEventListener("click",() => {
    btnClear.classList.toggle("btn-clear");
})
miDiv.innerHTML = "Mi div!!";
const texto = document.createTextNode("Mi div!!!");
miDiv.appendChild(text);
const container = document.querySelector(".")

console.log(miDiv);

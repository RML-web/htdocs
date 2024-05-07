//Revisar multiples condiciones
//roles: ADMIN, EDITOR, AUTOR, LECTOR


let rol = "ADMIN";
if(rol === "ADMIN") {
    console.log("Tienes control total");
}else if(rol ==="EDITOR"){
    console.log("Solo puedes editar");
}else if(rol === "AUTOR") {
    console.log("Solo puedes editar tus entradas");
}else if("LECTOR"){
    console.log("Solo puedes leer");
} else {
    console.log("No tienes cuenta");
}

/*Se evalua como false:
- String vacío
-0 
-Undefined
-false
-NaN(Not a number)

*/

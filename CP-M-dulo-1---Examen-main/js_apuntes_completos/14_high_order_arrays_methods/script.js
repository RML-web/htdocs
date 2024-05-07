//Concepto de callback

function consultaDatos(){
    console.log("2 Petición iniciada...");
    setTimeout(() => {
        console.log("3 Petición en curso...");
    }, 1000);
    console.log("4 Datos recibidos");

}
consultaDatos("1 Pedimos los datos ...");
consultaDatos();
console.log("5 Mostrando los datos");
console.log("6 fin del script");
<?php
//declaracion de función
function saludar() {
    echo "<h2>Hola desde una función</h2>";
}

//Invocar a la función
saludar();


//funcion que recibe un número como argumento e imprime su tabla


function imprimirTabla($num){
    echo "<h3>Tabla del $num<h3>" ;
    for ($i = 1; $i <=10 ; $i++) {
        $res =$num*$i;
        echo "$num x $i = $res<br>";
    }

}

if(isset($_GET['numero'])){
    imprimirTabla($_GET['numero']);
} else {
    echo "Pasa un numero por la URL";
}

function getNombre($nombre){
    $texto = "El nombre es: $nombre";
    return $texto;
}

function getNombreCompleto($nombre, $apellidos) {
    $texto = getNombre($nombre). '<br>'.getApellidos($apellidos);
    return $texto;
}

function mostrarNombre()($nombre, $apellidos);
{
echo getNombreCompleto($nombre, $apellidos);
}
mostrandoNombre("Mario","Bross")
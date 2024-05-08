<?php

/* 
 Ejercicio 1. Hacer un programa en PHP que tenga un array con 8 numeros enteros
 y que haga lo siguiente:
 - Recorrerlo y mostrarlo
 - Ordenarlo y mostrarlo
 - Mostrar su longitud
 - Buscar algun elemento (buscar por el parametro que me llegue por la url)
 */
echo "<ul>";

$numeros = array(0, 1, 2, 3, 4, 5, 6, 7 );
for ($i=0; $i < count($numeros); $i++) {
    echo "<li>$numeros[$i]</li>";
}



//foreach


echo "</ul>";

$números = range(0, 7);
shuffle($números);
foreach ($números as $número) {
    echo "$número ";
}
echo count ($numeros);


$hola = $_GET['num'];
$clave = array_search($hola, $numeros);
echo $clave;
?>


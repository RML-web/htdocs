<?php
//Abrir archivo
$archivo = fopen("archivo.txt", "a+");

var_dump($archivo);
//leer hasta el final

while (!feof($archivo)){
    $contenido = fgets($archivo);

echo  '<p>'. $contenido . '</p>';

}


$contenido = fgets($archivo);

echo $contenido;

fclose($archivo);

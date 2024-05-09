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

fwrite($archivo, "********Soy un texto añadido desde php *****");
fwrite($archivo, date("d-m-y"). "********Soy un texto añadido desde php *****");

fclose($archivo);

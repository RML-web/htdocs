<?php
/*
Tipos de datos:
Enteros (int/integer) = 23
decimales (float/double) = 34.5
Cadenas de texto (String) = "hola" ''
Booleanos (bool) = true / false
null
Array (Colección)
Objetos
*/

$numero = 100;
$decimal = 45.6;
$verdadero = false;
$nulo = null;
echo gettype($numero);
echo gettype($decimal);
echo gettype($nulo);
echo gettype($verdadero);


$mi_nombre[] = "Don Quijote de la Mancha";
echo gettype($mi_nombre);


var_dump($mi_nombre);
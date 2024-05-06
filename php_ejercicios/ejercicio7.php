<?php

/* 
 Ejercicio 7. Hacer un programa que muestre todos los numeros IMPARES entre dos numeros
 * que nos lleguen por la URL($_GET)
 */
$i = 1;
do {
 $numero = rand(100,300);
 if ($numero%2 != 0){
    echo $numero;
    echo "<br>";
 }
 (++$i);
} while ($i < 51);
?>
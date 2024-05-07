<?php

/* 
 Ejercicio 7. Hacer un programa que muestre todos los numeros IMPARES entre dos numeros
 * que nos lleguen por la URL($_GET)
 */

$num1 = $_GET['numero'];
$num2 = $_GET['numero2'];

if($num1 > $num2){
    $num3 = $num1;
    $num1 = $num2;
    $num2 = $num3;
}

for($i = $num1; $i <= $num2; $i++){
    if(!($i % 2 == 0)){
        echo "$i ";
    }
}
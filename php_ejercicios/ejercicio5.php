<?php

/* 
 Ejercicio 5. Hacer un programa que muestre todos los numeros entre dos numeros
 * que nos lleguen por la URL($_GET)
 */
 
 
 
 $num1 = $_GET["num1"];
 $num2 = $_GET["num2"];
  
 $impar = 0;
  
 for ($num1; $num1<$num2; $num1++) {
  
     if (($num1 % 2) != 0) {
         $impar++;
     }
 }
 echo $impar;
?>


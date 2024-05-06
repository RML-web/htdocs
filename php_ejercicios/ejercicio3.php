<?php

/* 
 Ejercicio 3. Escribir un programa que imprima por pantalla los cuadrados
 (un numero multiplicado por si mismo) de los 40 primeros numeros naturales.
 PD: Utilizar bucle while.
 */


 
 $counter = 0;
 while($counter <=40){
    $cuadrado = $counter*$counter;
    echo "<p>El cuadrado de $counter es $cuadrado</p>"
    $counter++;
 }
 for ($i=0; $i < 40; $i++) {
    $cuadrado = $i*$i;
    echo "<p>El cuadrado de $i es $cuadrado</p>"
    

 }

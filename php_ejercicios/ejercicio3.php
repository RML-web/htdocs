<?php

/* 
 Ejercicio 3. Escribir un programa que imprima por pantalla los cuadrados
 (un numero multiplicado por si mismo) de los 40 primeros numeros naturales.
 PD: Utilizar bucle while.
 */
$num = 1;
 while($num <= 40){
    echo "el cuadrado de $num es: ".$num*$num ."<br>";
    $num++;
 }
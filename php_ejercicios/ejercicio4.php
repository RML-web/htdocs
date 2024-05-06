<?php

/* 
Ejercicio 4. Recoger dos numeros por la url(Parametros GET) y hacer todas las 
 * operaciones basicas de una calculadora(suma, resta, multiplicaion y division)
 * de esos dos numeros.
 */

 $num1 = $.GET['numero'];
 $num2 = $.GET['numero2'];

 echo "La suma es: ".$num1+$num2." La resta es: ".$num1-$num2.".$num1-$num2".La division es: ".$num1/$num2.".$num1$num2".La multiplicacion es: ".$num1*$num2.".$num1*$num2".
 >?
 // http:localhost:8080/../../index.php?numero1=3&numero2=5

 if(isset($_GET['numero1'])) && isset($_GET['numero2']){
      $n1 = $_GET['numero'];
      $n2 = $_Get['numero'];


      echo "<h1>Calculadora</h1>";
      









 }
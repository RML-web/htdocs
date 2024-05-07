<?php

/* 
Ejercicio 4. Recoger dos numeros por la url(Parametros GET) y hacer todas las 
 * operaciones basicas de una calculadora(suma, resta, multiplicaion y division)
 * de esos dos numeros.
 */

 if(isset($_GET['numero']) && isset($_GET['numero2'])){
        $num1 = $_GET['numero'];
        $num2 = $_GET['numero2'];
        echo "la Suma es: ".$num1+$num2.". La resta es: ". $num1-$num2." . La multiplicación es: ".$num1*$num2." . La división es: ". $num1/$num2.".";
    }else{
    echo "<h1>Introduce correctamente los parámetros por la URL</h1>";
    }







 
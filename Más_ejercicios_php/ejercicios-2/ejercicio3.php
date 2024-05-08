<?php

/* 
 Ejercicio 3. Programa que compruebe si una variable esta vacia y si está vacia,
 rellenarla con texto en minusculas y mostrarlo en mayusculas y negrita.
 */
$vacio = "";
 if (empty($vacio)) {
    echo "la variable está vacia";
    $vacio = "mayusculas";
    echo strtoupper($vacio);
    echo "<b>$vacio</b>";
   
} else {
    echo "la variable no está vacia";
};


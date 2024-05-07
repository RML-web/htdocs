<?php
//Variables globales
$frase = "El tiempo sin ti es empo";

echo $frase;

function holaMundo()

{
    $frase2 = "Una frase<br>";
    global $frase;
    echo $frase;
}

holaMundo();

echo $frase2;




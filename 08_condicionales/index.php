<?php
/*
condicionales if
if(condición){
    instrucciones
}else{
    otras instrucciones
}

//

Operadores de comparación

== igual no estricto, compara el valor sin tener en cuenta el tipo de dato
=== igualdad estricta
!= desigualdad
!== desigualdad estricta
<> desigualdad
<menos que
> mayor que
<= menor o igual que
>= mayor o igual que


Operadores lógicos
&& AND -> y 
|| OR -> O
! NOT -> negación

*/

$color = "verde";
if($color == "rojo"){
    echo 'El color no es rojo';
}   else{
    echo 'El color no es rojo';
}

$year = 2024;
if($year >= 2024){
    echo "Estamos de 2024 3n adelante";
}else{
    echo "El año es anterior a 2024";
}

//if anidados

$nombre = "Ramona Landvreugd";
$ciudad = "Palma de Mallorca";
$continente = "Europa";
$edad = 34;
$mayoría_de_edad = 18;

if($edad >= $mayoria_de_edad){
    echo "<h1>$nombre es MAYOR de edad</h1>";
    if($continente === "Europa"){
        echo"<h2>Vive en $ciudad</h2>;
    }else
    }
}else{
    echo "<h1>$nombre es MENOR de edad</h1>";
}

$edad1 = 18;
$edad = 65;
$edad_usuario= 17;

if($edad >= $edad1 && $edad_usuario <= $edad2){
    echo "Estás en edad laboral"
}else{
    echo "No estás en edad laboral"
}


<?php
$peliculas = array('Batman', 'Superman', 'Spiderman');
$cantantes = ['Julio Iglesias', 'Sabina', 'Serrat', 'Rosalia', 'Shakira'];

//var_dump($peliculas);
//echo $cantantes[3];
print_r($cantantes[2]);

//pista count()

for ($i=0; $i < count($cantantes); $i++) {
    echo "<li>$cantantes[$i]</li>";
}

echo "</ul>";

//foreach
echo "<ul>";
foreach ($cantantes as $cantante) {

}
echo "</ul>";



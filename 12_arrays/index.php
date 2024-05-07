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

//Arrays asociativos
$personas = array (
    'nombre' => 'Mario',
    'apellidos' => 'Bross',
    'trabajo' => 'Fontanero'

);

var_dump($personas);

echo = $personas['nombre'];
echo "<hr>";
//recorrer array asociativo
foreach($persona as $key => $value) {
    echo $key .' : ' . $value . '<br>';
}

//Array multidimensional
$contactos = [

    ['nombre'=> "Bart", 'email' => 'bart@email.com'],
    ['nombre'=> "Lisa", 'email' => 'Lisa@email.com'],
    ['nombre'=> "Maggie", 'email' => 'Maggiet@email.com'],
];

var_ dump($contactos);
echo "<hr>";
foreach($contactos as $key => $contacto) {
    echo $key . ': El email de ' . $contacto['nombre'] . 'es' . $contacto['email'] . '<br>'
}



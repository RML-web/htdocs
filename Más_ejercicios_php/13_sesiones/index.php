<?php

//Iniciar la sesión
session_start();
$_SESSION['variable_de_session'] = "Soy una sesion activa";
echo '<p>' .$_SESSION['variable_de_session'] . '</p>';
$variable_normal = "Git es un sistema de control de versiones distribuidas";
echo $variable_normal;
?>
<a href = "pagina.php">Ir a la página 1</a></p>
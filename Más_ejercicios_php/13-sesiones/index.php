<?php
//iniciar Sesion
session_start();
$_SESSION['variable_de_sesion'] = "Soy una sesión activa";
echo '<p>' . $_SESSION['variable_de_sesion'] . '</p>';
$variable_normal = "git es un sistema";

echo $variable_normal;
?>
<a href="./pagina1.php">Pagina 1</a>
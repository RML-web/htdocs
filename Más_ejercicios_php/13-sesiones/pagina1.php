<?php
session_start();

if (isset($_SESSION['variable_de_sesion'])) {
    echo '<p>' . $_SESSION['variable_de_sesion'] . '</p>';
    echo "<h1>Página privada</h1>";
} else {
    // header("location:index.php");
    echo "Contenido público";
}
?>
<a href="./index.php">Ir a Index</a>
<a href="./logout.php">logout</a>
<?php
var _dump($_COOKIE);
if(isset($_COOKIE['micookie'])) {
    echo '<h2>'. $_COOKIE['micookie'] . '</h2>';
} else {
    echo "micookie"
}

?>
<a href = "crear_cookie.php">Crear las galletas</a>
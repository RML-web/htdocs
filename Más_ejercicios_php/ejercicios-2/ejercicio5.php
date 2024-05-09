

/* 
 Crear un array con el contenido de la tabla:
 ACCION   AVENTURA   DEPORTES
 GTA      ASSASINS    FIFA 19
 COD      CRASH       PES 19
 PUGB     Prince of   MOTO GP 19
          persia
 
Cada fila debe ir en un fichero separado(includes).
 */
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        
    
<?php include './accion.php' ?> 
<?php include './aventura.php' ?> 
<?php include './deportes.php' ?> 

</table>
</body>
</html>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            
    <?php

/* 
 Ejercicio 6. Mostrar una tabla de HTML con las tablas de multiplicar del 1 al 10.
 */


       
         for ($j=1; $j<= 10; $j++) {
            echo "<td>";
            for ($i=1; $i<=10; $i++) {
            
                $multiplica=$j*$i; 
                echo $j. "x" .$i. "=" .$multiplica. "<br>"; 
            }
            echo "</td>";
         
        }

    
     
    ?>
    </tr>
    </table>
</body>
</html>
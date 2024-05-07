
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablas de multiplicar</title>
    <style>
        table{
            border: 1px black solid
        }
        th, td {
   width: 150px;
   text-align: left;

   border: 1px solid #000;
}
    </style>
</head>
<body>
 <!-- Ejercicio 6. Mostrar una tabla de HTML con las tablas de multiplicar del 1 al 10. -->
 <table>
    <tr>
    <?php 
  
     for($i= 1;$i <= 10; $i++){
        echo "<th>Tabla del $i</th>";
     }
 echo "</tr><tr>";
    for($i= 1;$i <= 10; $i++){
        echo "<td>";
        for($j= 1;$j <= 10; $j++){
            echo "$i"."x"."$j=".$i*$j."<br>";
        }
     echo "</td>" ;
    }
    ?>
    </tr>
 </table>
</body>
</html>
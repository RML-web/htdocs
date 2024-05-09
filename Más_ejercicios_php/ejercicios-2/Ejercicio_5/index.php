
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1">


        <?php
        $tabla = array(
            "ACCION" => ["GTA", "COD", "PUGB"],
            "AVENTURA" => ["ASSASINS", "CRASH", "PRINCE OF PERSIA"],
            "DEPORTES" => ["FIFA 19", "PES 19", "MOTO GP 19"]

        );

        $categorias = array_keys($tabla);

        ?>
        <TR>
            <?php foreach ($categorias as $categoria) : ?>
                <th><?= $categoria ?></th>
            <?php endforeach ?>
        </TR>
        <?php include './/firs-row.php' ?>
        <?php include './second-row.php' ?>
        <?php include './third-row.php' ?>


    </table>
</body>

</html>
<!-- <?php if (true) : ?>
            <td>Solo se muestra si el if es cierto</td>
            <?php endif ?> -->

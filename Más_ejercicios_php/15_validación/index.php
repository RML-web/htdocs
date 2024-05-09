<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion de formulario</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        div {
            margin-top: 10px;

        }

        form {
            max-width: 300px;
        }

        label {
            display: block;
        }

        input[type="radio"]+label,
        input[type="checkbox"]+label {
            display: inline;
        }
    </style>
</head>

<body>
    <?php
    function Filter($data)
    {
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {

        var_dump($_POST);
        $nombre = filter($_POST['nombre']);
        
}
    ?>
    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" maxlength="20" id="nombre">
        </div>
        <div>
            <label for="password">Contraseña</label>
            <input type="password" name="password" maxlength="50" id="password">
        </div>
        <div>
            <label for="estudios"></label>
            <select name="estudios" id="estudios">
                <option value="sin-estudios">Sin estudios</option>
                <option value="ESO" selected>Educación secundaria obligatoria</option>
                <option value="FP">Formación Profesional</option>
                <option value="Grado">Grado Universitario</option>
            </select>
        </div>
        <div>
            <fieldset>
                <legend for="nacionalidad">Nacionalidad</legend>
                <div>
                    <input type="radio" name="nacionalidad" id="es" value="es">
                    <label for="es"> Española</label>
                </div>
                <div>
                    <input type="radio" name="nacionalidad" id="otra" value="otra">
                    <label for="otra">Extranjera</label>
                </div>
            </fieldset>
        </div>
        <fieldset>
            <legend>Idiomas:</legend>
            <div>
                <input type="checkbox" name="idiomas[]" value="Castellano" id="es" checked>
                <label for="es">Español</label>
            </div>
            <div>
                <input type="checkbox" name="idiomas[]" value="catalan" id="cat">
                <label for="cat">Catalán</label>
            </div>
            <div>
                <input type="checkbox" name="idiomas[]" value="Ingles" id="en">
                <label for="en">Inglés</label>
            </div>
            <div>
                <input type="checkbox" name="idiomas[]" value="Aleman" id="de">
                <label for="de">Alemán</label>
            </div>
        </fieldset>
        <div>
            <label for="email">Email</label>
            <input type="text" name="email" maxlength="30" id="email">
        </div>
        <div>
            <label for="web">Sitio Web</label>
            <input type="text" name="web" maxlength="30" id="web">
        </div>
        <button type="submit" name="sumbit" value="enviar">Enviar</button>

    </form>
</body>
</html>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion de formulario</title>
    
    
    <style>

       
        form {
            max-width: 300px;
            margin: auto;
        }

            
            
        
        input[type="radio"]+label,
        input[type="checkbox"]+label {
            display: inline;
        }
body {
    font-family: sans-serif;
}
        
       
        
    </style>
</head>

<body>
    <?php
    function filter($data)
    {

        $data = trim($data);
        $data = stripslashes($data); //quitar barras \
        $data = htmlspecialchars($data);
        return $data;
    }
    
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sumbit'])) {
        $errores = [];
        if (empty($_POST['nombre']) || preg_match("/[0-9]/", $_POST['nombre'])) {
            $errores[] = "El nombre no puede estar vacio y no puede contener números.";
        }
        if (empty($_POST['password']) || strlen($_POST['password']) < 4) {
            $errores[] = "El campo de la contraseña no puede estar vacio y ser mayor de 4.";
        }
        if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errores[] = "El campo de email no puede estar vacio y debe ser un email valido.";
        }
        if (empty($_POST['web']) || !filter_var($_POST['web']. FILTER_VALIDATE_URL)) {
            $errores[] = "El campo de web no le importa a nadie pero no puede estar vacio y debe ser válido.";
        }

        if (empty($errores)) {

            $nombre = filter($_POST['nombre']);
            $password = filter($_POST['password']);
            $estudios = filter($_POST['estudios']);
            $nacionalidad = filter($_POST['nacionalidad']);
            $idiomas = filter(implode(", ", $_POST['idiomas']));
            $web = filter($_POST['web']);
            $email = filter($_POST['email']);
            echo $nombre;

            if (!is_dir('images')){
               mkdir('images', 0777);
            }
        }
        $image_path = 'images/' .str_replace(" ","-", $image_name);

    move_uploaded_file($image['tmp_name'], $image_path);
    ?>
    <ul>
        <?php if(isset($errores)){
            foreach($errores as $error){
                echo '<li>'.$error.'</li>';
            }
        }
        ?>
    </ul>

    <?php if (isset($_POST['sumbit'])) : ?>
        <h2>Has enviado los siguientes datos</h2>
        <p>Nombre: <?php isset($nombre) ? print $nombre : "" ?></p>
        <p>Password: <?php isset($password) ? print $password : "" ?></p>
        <p>Estudios: <?php isset($estudios) ? print $estudios : "" ?></p>
        <p>Nacionalidad: <?php isset($nacionalidad) ? print $nacionalidad : "" ?></p>
        <p>Idiomas: <?php isset($idiomas) ? print $idiomas : "" ?></p>
        <p>Web: <?php isset($web) ? print $web : "" ?></p>
        <p>Email: <?php isset($email) ? print $email : "" ?></p>
    <?php endif; ?>

    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

        <div>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" maxlength="50" id="nombre">
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
                <legend>Nacionalidad</legend>
                <div>
                    <input type="radio" name="nacionalidad" id="es" value="es" checked>
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
                <input type="checkbox" name="idiomas[]" value="Castellano" id="esp" checked>
                <label for="esp">Español</label>
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
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validacion de formulario</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.cdnfonts.com/css/natural-toons" rel="stylesheet">
                
    
                
    
    <style>



  @import url('https://fonts.cdnfonts.com/css/natural-toons');

        
                                            
                
        body {
            
            background-image: url("./background.jpg");
            background-repeat: no-repeat;
            background-position: cover;
            background-size: cover;
            background-attachment: fixed;
            -moz-background-size: cover;
            -webkit-background-size: cover;
            widht: 100vw;
            margin:0;
            padding: 0
            font-family: 'Funny Barber';
            font-family: 'Natural Toons', sans-serif;
            border-color: white;
            text-shadow: grey 2px 2px 2px;
            font-size: 28px;
                                                
           

        }



        div {
            margin-top: 10px;

        }

        form {
            max-width: 300px;
            margin: auto;

            
            
        }

        label {
            display: block;
        }

        input[type="radio"]+label,
        input[type="checkbox"]+label {
            display: inline;
        }

        
        button {
  --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
  --border-width: 0.125em;
  --curve-size: 0.5em;
  --blur: 30px;
  --bg: #080312;
  --color: #afffff;
  color: var(--color);
  cursor: pointer;
  /* use position: relative; so that BG is only for button */
  position: relative;
  isolation: isolate;
  display: inline-grid;
  place-content: center;
  padding: 20px 50px;
  font-size: 17px;
  border: 0;
  margin:20px 0px;
  text-transform: uppercase;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
  clip-path: polygon(
    /* Top-left */ 0% var(--curve-size),
    var(--curve-size) 0,
    /* top-right */ 100% 0,
    100% calc(100% - var(--curve-size)),
    /* bottom-right 1 */ calc(100% - var(--curve-size)) 100%,
    /* bottom-right 2 */ 0 100%
  );
  transition: color 250ms;
}

button::after,
button::before {
  content: "";
  position: absolute;
  inset: 0;
}

button::before {
  background: var(--border-color);
  background-size: 300% 300%;
  animation: move-bg7234 5s ease infinite;
  z-index: -2;
}

@keyframes move-bg7234 {
  0% {
    background-position: 31% 0%;
  }

  50% {
    background-position: 70% 100%;
  }

  100% {
    background-position: 31% 0%;
  }
}

.arco {
            max-width: 600px;
            margin: auto;

            
            
        }


button::after {
  background: var(--bg);
  z-index: -1;
  clip-path: polygon(
    /* Top-left */ var(--border-width)
      calc(var(--curve-size) + var(--border-width) * 0.5),
    calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
    /* top-right */ calc(100% - var(--border-width)) var(--border-width),
    calc(100% - var(--border-width))
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
    /* bottom-right 1 */
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width)),
    /* bottom-right 2 */ var(--border-width) calc(100% - var(--border-width))
  );
  transition: clip-path 500ms;
}

button:where(:hover, :focus)::after {
  clip-path: polygon(
    /* Top-left */ calc(100% - var(--border-width))
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
    calc(100% - var(--border-width)) var(--border-width),
    /* top-right */ calc(100% - var(--border-width)) var(--border-width),
    calc(100% - var(--border-width))
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
    /* bottom-right 1 */
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width)),
    /* bottom-right 2 */
      calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width))
  );
  transition: 200ms;
}

button:where(:hover, :focus) {
  color: #fff;
}    

.unicorn {

    position:absolute;
    left: 100px;
    
    z-index: -1;
}
.unicorn2 {

position:absolute;
right: 100px;

z-index: -1;
}
.unicorn img {
    width: 500px;
    
}
.unicorn2 img {
    width: 500px;
    
}

.arco img{
    width: 600px;
    
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
        }
    }
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

    <div class="arco"><img src="./images/arco.png" alt="arc"></div>
    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <div class="unicorn"><img src="./images/uni1.png" alt="uni"></div>
    <div class="unicorn2"><img src="./images/uni2.png" alt="uni"></div>
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
<?php
/* Se ejecuta el código mientras la condición se evalue a true. Nota: en algún momento se tiene que poder salir del bucle. Evaluar la condición
a false o con la sentencia break;

while(condición) {
    bloque de instrucciones
}
*/
$contador = 0;
while($contador <= 100){
    if(!($contador === 3)){

    }
    echo $contador;

    if($contador !=100){
        echo ", ";
    }
    $contador ++;

}
echo ".";

echo "<hr>";
if(isset($_GET['numero'])){
    $numero = $_GET['numero'];
}else{
    $numero = 1;
}
echo "<h1>Tabla de multiplicar del número $numero</h1>";
$counter = 1;
while($counter<= 10){
    
    echo "$numero x $counter = ".$numero*$counter."<br>";
    $counter++;
}

echo "<hr>";
/*
do{
    bloque de instrucciones
}while(condición);
*/
/*
for(variable contador; condición; actualiza el contador){

}
*/
for($i = 0; $i < 10; $i++){
    echo "La i vale: $i"
}


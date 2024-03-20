<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: *");
  
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  //require("conexion.php");
  include("./conexion.php");
  
  $con=mysqli_connect("localhost","id21951310_root","Aa1!2345","id21951310_bd1");
  if (!$con) {
    die("Error al conectar: " . mysqli_connect_error());
}
$query = "INSERT INTO registro_P (codigo,clave,descripcion,mayoreo,menudeo,unidades,peso,dimensiones) VALUES (?, ?, ?, ?, ?, ?, ?,?)";
$stmt = mysqli_prepare($con, $query);
mysqli_stmt_bind_param($stmt, 'ssssssss', $params->codigo, $params->clave, $params->descripcion, $params->mayoreo, $params->menudeo, $params->unidades,$params->peso,$params->dimensiones);

if (mysqli_stmt_execute($stmt)) {
    echo "Datos insertados correctamente.";
} else {
    echo "Error al insertar datos: " . mysqli_error($con);
}
  /*

  mysqli_query($con,"insert into registrar_U (nombre,apellido_p,apellido_m,correo,contrasena) values
  ('$params->nombre','$params->apellido_p','$params->apellido_m','$params->correo','$params->contrasena')");
    
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);  */
?>
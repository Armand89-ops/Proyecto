<?php 
    header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}
  //header('Access-Control-Allow-Origin: *'); 
  //header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();
  if($con){
      
    $registros=mysqli_query($con,"SELECT codigo,clave,descripcion,mayoreo,menudeo,unidades,peso,dimensiones,id	FROM registro_P");
    
    $vec=[];  
    while ($reg=mysqli_fetch_array($registros))  
    {
      $vec[]=$reg;
    }
    
    $cad=json_encode($vec);
    echo $cad;
    //header('Content-Type: application/json');
  }

  /*$registros=mysqli_query($con,"select codigo, descripcion, precio from articulos");
  $vec=[];  
  while ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');*/
?>
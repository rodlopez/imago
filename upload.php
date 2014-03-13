<?php
	

	$info = $_POST;

	// var_dump($_FILES);
	

	$nombre = $_POST['usuario'];

	// echo "asdads" .$nombre;

	$imagen=$_FILES['archivo']['name'];  
	$tipo_de_archivo=$_FILES['archivo']['type'];
	$ruta=$_FILES['archivo']['tmp_name'];

	$imagen=htmlentities($imagen, ENT_QUOTES);

	$tipo=explode(".",$imagen);
	$type=strtolower($tipo[1]);

	$refencia=sha1(date("r"));

	$carpeta="../img/".$refencia.".".$type;
	move_uploaded_file($ruta, $carpeta);

	 $config_conexion = mysql_connect("localhost", "root", "") or die("Error");	

	 mysql_select_db("agenda", $config_conexion);

						 $resultado = mysql_query("UPDATE usuarios 
						 									SET nombre_imagen = '$imagen' ,tipo_imagen = '$tipo_de_archivo' , ruta_imagen = '$carpeta'
						 									WHERE usuario = '$nombre'  ");

?>
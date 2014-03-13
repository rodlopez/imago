<?php

// Conexion a la Bd
require '../MvcClientesDatabase.php';
mysql_select_db($db_name,$connection) or die("Error de conexion a la base de datos");

	$info = $_POST["data"];

	// var_dump($_POST);

	// $contenido = 
	$contenido= (json_decode($info));

	// var_dump($contenido);

	$id = $contenido->id;
	$nombre = $contenido->nombre;
	$sexo = $contenido->sexo;
	$usuario = $contenido->usuario;
	$apellidos = $contenido->apellidos;
	
	 $SqlUpdate ="UPDATE `usuarios` SET `nombre`='$nombre',`sexo`='$sexo',`usuario`='$usuario', `apellidos`='$apellidos'  WHERE id='$id';";
			
	$rs = mysql_query($SqlUpdate);

	echo json_encode(array(
		"success" 	=> mysql_errno() == 0,
		"msg"		=> mysql_errno() == 0?"Datos Actualizados":mysql_error()
	));
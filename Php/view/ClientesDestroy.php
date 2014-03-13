<?php
	// Conexion a la Bd
    require '../MvcClientesDatabase.php';
	mysql_select_db($db_name,$connection) or die("Error de conexion a la base de datos");

	$info = $_POST["data"];
	// var_dump($info);
	$data = json_decode($info);
	$id = $data->id;

	$SqlDelete = sprintf("DELETE FROM `usuarios` WHERE `id`=%d LIMIT 1;",
		mysql_real_escape_string($id));

	$rs  = mysql_query($SqlDelete);
	
	echo json_encode(array(
		"success" 	=> mysql_errno() == 0,
		"msg"		=> mysql_errno() == 0?"Datos Borrados Correctamente":mysql_error()
	));
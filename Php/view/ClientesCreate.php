<?php

// Conexion a la Bd
require '../MvcClientesDatabase.php';
mysql_select_db($db_name,$connection) or die("Error de conexion a la base de datos");

	$info = $_POST["data"];

	// var_dump($_FILES);
	$data = json_decode(stripslashes($info));

	$nombre = $data->nombre;
	$sexo = $data->sexo;
	$usuario = $data->usuario;
	$apellidos = $data->apellidos;
	// $ruta_foto = $data->ruta_imagen;

	
			 $SqlInsert =sprintf("INSERT INTO `usuarios` (`nombre`,`sexo`,`usuario`,`apellidos`)VALUES ('%s', '%s', '%s', '%s');",
					mysql_real_escape_string($nombre),
					mysql_real_escape_string($sexo),
					mysql_real_escape_string($usuario),
					mysql_real_escape_string($apellidos));

			
			
			$rs = mysql_query($SqlInsert);

				echo json_encode(array(
					"success" 	=> mysql_errno() == 0,
					"msg"		=> mysql_errno() == 0?"Datos Agregados Correctamente":mysql_error(),
					"data"		=> array(
						array(
							"id"	=> mysql_insert_id(),	// <--- importantisimo regresar el ID asignado al record, para que funcione correctamente el metodo update y delete
							"nombre"	=> $nombre,
							"sexo"	=> $sexo,
							"apellidos"	=> $apellidos,
							"usuario"	=> $usuario,

						)
					)
				));
<?php
// Configuracion de la conexion a la bd
$db_name = "agenda"; //Nombre de la Base de Datos
$db_host = "localhost"; 
$db_username = "root"; //Cambiar Usuario segun la configuracion de tu Mysql
$db_password = ""; // Cambiar Password segun la configuracion de tu Mysql

// Conexion a la bd
$connection = mysql_connect($db_host, $db_username, $db_password) or die("Error de conexi�n al servidor SQL".$connection ."<br>".mysql_error()."<br>");

mysql_select_db($db_name,$connection) or die("Error de conexion a la base de datos" .mysql_error());

?>
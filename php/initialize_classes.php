<?php
	//NOTE : Configure the variables for the database connection
	$config = parse_ini_file( "../../../includes/tws_read_only.ini", true, INI_SCANNER_RAW);
	defined('DB_SERVER')  ?null : define('DB_SERVER',$config['servername']);
	defined('DB_USER')    ?null : define('DB_USER',$config['username']);
	defined('DB_PASS')    ?null : define('DB_PASS',$config['password']);
	defined('DB_NAME')    ?null : define('DB_NAME',$config['dbname']);
	

// NOTE : PHP CLASSES
	require_once("class_MySQLDatabase.php");
	require_once("class_quote.php");
	require_once("class_image.php");
?>

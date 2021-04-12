<?php
require_once("initialize_classes.php");

if(isset($_POST['GET_INITIAL_QUOTES'])){
		//NOTE : Get two qoutes.
			$current_quotes_sql = "SELECT *";
			$current_quotes_sql .= " FROM cf_quotes";
			$current_quotes_sql .= " WHERE publish > 0";
			$current_quotes_sql .= " ORDER BY RAND()";
			$current_quotes_sql .= " LIMIT 2";
		$quotes = MySQLDatabase::find_objects_by_sql( $current_quotes_sql);
		$return_array = [$quotes];
		echo json_encode($quotes);
}

?>
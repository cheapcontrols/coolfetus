<?php
class MySQLDatabase {

	private static $connection;
	public static $affected_rows;
	public static $Third_last_query;
	public static $Second_last_query;
	public static $last_query = array("not used","not used","not used");
	public static $last_inserted_ID;

	function __construct(){
		$this->open_connection();
	}

	private static function open_connection(){
		try {
			self::$connection = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME . ";charset=utf8", DB_USER,DB_PASS,
										array(PDO::ATTR_EMULATE_PREPARES => false,PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch(PDOException $e){
			echo("Database connection failed: " . $e->getMessage());
		}        
	}

	/***************************  Close Connection **************************/
	public function close_connection(){
		if($this->connection != null){
			$this->connection = null;
		}
	}

	/***************************  Insert record REMOVED *************************/

	/***************************  Update record RMEOVED*************************/

	/***************************  Find all objects **************************/
	public static function find_all(){
		$result_array = array();
		$sql = "SELECT * FROM " . static::$table_name;
		$sql .= " WHERE date_del IS NULL";
		$object = self::sql_query($sql);
		if($object->rowCount()){
			//Set fetch mode
			$object->setFetchMode(PDO::FETCH_CLASS,static::$table_name);
			while($result = $object->fetch()){
				array_push($result_array,$result);
			}
			return($result_array);
		}else {
			return(false);
		}
	}

	/***************************  Find class by sql *************************/

	/***************************  Find objects by sql ***********************/
	public static function find_objects_by_sql($sql){
		$result_array = array();
		$object = self::sql_query($sql);
		if($object->rowCount()){
			//Set fetch mode
			$object->setFetchMode(PDO::FETCH_OBJ);
			while($result = $object->fetch()){
				array_push($result_array,$result);
			}
			return($result_array);
		}else{
			return(false);
		}
	}

	/***************************  Find objects by sql ***********************/

    /***************************  Find object by ID *************************/

	/***************************  Find by sql string ************************/
	public static function find_by_sql($sql){
		return(self::sql_query($sql));
	}

	/***************************  Root SQL query ****************************/
	public static function sql_query($sql){
		$q = self::$connection->query($sql);
		self::$affected_rows = $q->rowCount();
		array_unshift(self::$last_query, $sql);
		array_pop(self::$last_query);
		MySQLDatabase::$last_inserted_ID = self::$connection->lastInsertId();
		return $q;
	}

	public static function single_object_query($sql){
		$this_query = self::$connection->prepare($sql);
		if($this_query->execute()){
			$q = $this_query->fetchObject(static::$table_name);
		}else{
			$q = "failed";
		}
		return $q;	
	}
}

$database = new MySQLDatabase();
?>
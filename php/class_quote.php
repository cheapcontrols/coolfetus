<?php
class quote extends MySQLDatabase{

		protected static $table_name="cf_quotes";

		public $ID;
		public $date_ent;
		public $date_mod;
		public $date_del;
		public $publish;
		public $quote;
		protected static $field_array = array('quote');

}
?>
<?php
class image extends MySQLDatabase{

    protected static $table_name="cf_images";

    public $ID;
    public $date_ent;
    public $date_mod;
    public $date_del;
    public $name;
    public $note;
    protected static $field_array = array('name','note');

}
?>

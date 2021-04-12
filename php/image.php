<?php
require_once("initialize_classes.php");

if(isset($_POST['GET_ALL_IMAGES'])){
    echo json_encode(image::find_all());
}

?>

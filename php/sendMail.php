<?php
    if(!isset($_POST["contactArea"])){
        exit();
    }

    $to = "julien@rmbi.ch";
    $subject = "WEBSITE MESSAGE!";
    $message = $_POST["content"];
    mail($to, $subject, $message);
?>

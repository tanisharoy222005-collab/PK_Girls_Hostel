<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "pk_girls_hostel";

$conn = new mysqli(
    $host,
    $user,
    $password,
    $database
);

if ($conn->connect_error) {

    die(
        "Connection Failed: "
        . $conn->connect_error
    );
}
?>

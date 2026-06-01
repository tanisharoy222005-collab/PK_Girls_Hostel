<?php

include "config.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$room_type = $_POST['room_type'];
$college = $_POST['college'];
$guardian_name = $_POST['guardian_name'];
$guardian_contact = $_POST['guardian_contact'];
$message = $_POST['message'];

$sql = "INSERT INTO registrations
(
name,
phone,
email,
room_type,
college,
guardian_name,
guardian_contact,
message
)
VALUES
(
'$name',
'$phone',
'$email',
'$room_type',
'$college',
'$guardian_name',
'$guardian_contact',
'$message'
)";

if($conn->query($sql)){

    echo "
    <h2>
    Registration Submitted Successfully
    </h2>";
}
else{

    echo $conn->error;
}
?>

<?php

include 'db_connect.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $full_name =
        $_POST['name'];

    $phone =
        $_POST['phone'];

    $email =
        $_POST['email'];

    $room_type =
        $_POST['room_type'];

    $college =
        $_POST['college'];

    $guardian_name =
        $_POST['guardian_name'] ?? '';

    $guardian_contact =
        $_POST['guardian_contact'] ?? '';

    $message =
        $_POST['message'];

    $sql =

    "INSERT INTO registrations
    (
        full_name,
        phone,
        email,
        room_type,
        college_workplace,
        guardian_name,
        guardian_contact,
        message
    )

    VALUES
    (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )";

    $stmt =
        $conn->prepare($sql);

    $stmt->bind_param(

        "ssssssss",

        $full_name,
        $phone,
        $email,
        $room_type,
        $college,
        $guardian_name,
        $guardian_contact,
        $message

    );

    if($stmt->execute()){

        echo "

        <h2>
        Registration Successful
        </h2>

        <p>
        Thank you for applying.
        We will contact you shortly.
        </p>

        <a href='../index.html'>
        Return Home
        </a>

        ";

    }else{

        echo
        "Error : " .
        $stmt->error;
    }

    $stmt->close();
    $conn->close();
}

?>

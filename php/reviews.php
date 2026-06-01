<?php

include 'db_connect.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $name =
        $_POST['name'];

    $rating =
        $_POST['rating'];

    $review =
        $_POST['review'];

    $sql =

    "INSERT INTO reviews
    (
        name,
        rating,
        review_text
    )

    VALUES
    (
        ?,
        ?,
        ?
    )";

    $stmt =
        $conn->prepare($sql);

    $stmt->bind_param(

        "sis",

        $name,
        $rating,
        $review

    );

    if($stmt->execute()){

        echo "

        <h2>
        Review Submitted
        </h2>

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

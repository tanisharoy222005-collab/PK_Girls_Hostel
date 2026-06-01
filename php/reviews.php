<?php

include "config.php";

$name =
$_POST['name'];

$rating =
$_POST['rating'];

$review =
$_POST['review'];

$sql =
"INSERT INTO reviews
(name,rating,review)
VALUES
('$name','$rating','$review')";

if($conn->query($sql)){

    echo "
    <h2>
    Thank You For Your Review
    </h2>";
}
else{

    echo $conn->error;
}
?>

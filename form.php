<!----php for the contact form-->

<?php

if (isset($_POST['submit'])) {
$name = $_POST['name'];
$subject = $_POST['subject'];
$mailFrom = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$mailTo = "gary@uvs-tx.com";
$headers = "From: ".$mailFrom;
$txt = "You have received an email from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");
}

?>



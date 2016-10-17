<?php
  if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "kontakt@dawidarmatys.pl";
  $email = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];

  $headers = "From:" . $email . "\n";
  $headers .= "Content-Transfer-Encoding: 8bit \n";
  $headers .= "Content-Type: text/html; charset='UTF-8'";

print_r($headers);

  // print_r($_REQUEST);

  //send email
  mail($admin_email, "$name", $message, $headers);

  //Email response
  // echo "Thank you for contacting us!";
  }

  //if "email" variable is not filled out, display the form
  else  {
  }
?>
<?php
  if (isset($_REQUEST['email']))  {

  //Email information
  $admin_email = "dawideczek0@gmail.com";
  $email = $_REQUEST['email'];
  $name = $_REQUEST['name'];
  $message = $_REQUEST['message'];

  //send email
  mail($admin_email, "$name", $message, "From:" . $email);

  //Email response
  echo "Thank you for contacting us!";
  }

  //if "email" variable is not filled out, display the form
  else  {
  }
?>
<?php
require_once('vendor/autoload.php');

// define variables and set to empty values
$name = $email = $subject = $message = "";
$nameErr = $emailErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["Name"]);
  $email = test_input($_POST["Email"]);
  $subject = test_input($_POST["Subject"]);
  $message = test_input($_POST["Message"]);
  
  $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->CharSet = "UTF-8";
    try
	{
	  //Server settings
	  //$mail->SMTPDebug = 1;
	  $mail->isSMTP();
	  $mail->Host = "hidden-no-more-237.com";
	  $mail->SMTPAuth = true;
	  $mail->Username = 'contact-form@hidden-no-more-237.com';
	  $mail->Password = 'contactform';
	  $mail->SMTPSecure = 'ssl';
	  $mail->Port = 465;

	  //Recipients
	  $mail->setFrom('contact-form@hidden-no-more-237.com', 'website');
	  $mail->addAddress($email, $name);

	  //Content
	  $mail->isHTML(true);

	  $mail->Subject = $subject;
	  $mail->Body    = "<html><head></head><body><p>Message: ".$message. "</p><p>Sender's email: ".$email."</p><p>Sender's name: ".$name."</p></body></html>";
	  $mail->send();
	  $mail->ClearAllRecipients( );
	  $mail->addAddress("hiddennomorecameroon@gmail.com", "HNM237");
	  $mail->send();
	 echo 'Message has been sent. Thank you.';
	}
	catch( \PHPMailer\PHPMailer\Exception $e)
	{
	  //echo 'Message could not be sent.';
	  return 'Mailer Error' . $mail->ErrorInfo;
	}

	//then clear cache
	$_SESSION = array();
	session_unset();
	exit();
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

exit();
?>
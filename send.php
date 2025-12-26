<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contact-us.html");
    exit;
}

// Get form values safely
$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$phone   = trim($_POST['phone'] ?? '');
$company = trim($_POST['company'] ?? '');
$message = trim($_POST['message'] ?? '');

// Required field validation
if ($name === '' || $email === '' || $message === '') {
    echo "Please fill all required fields.";
    exit;
}

// ====== CHANGE THIS EMAIL TO YOUR EMAIL ======
$to = "yourname@gmail.com";  // 🔴 Replace with your email
// ============================================

$subject = "New Contact Form Submission";

// Prepare email body
$body  = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Company: $company\n\n";
$body .= "Message:\n$message";

// Email headers
$headers  = "From: Website <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    // Redirect back with success message
    header("Location: contact-us.html?success=1");
    exit;
} else {
    echo "Sorry, message could not be sent.";
}

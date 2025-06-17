<!-- Hier komt een contact formulier -->

<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=contact", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Verbinding mislukt: " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Veilig formulierdata ophalen
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    // check of alles is ingevuld
    if ($name && $email && $subject && $message) {
        $stmt = $pdo->prepare("INSERT INTO contact_berichten (name, email, subject, message) 
                               VALUES (:name, :email, :subject, :message)");

        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":subject", $subject);
        $stmt->bindParam(":message", $message);

        if ($stmt->execute()) {
            echo "Bedankt voor je bericht!";
        } else {
            echo " Fout bij het opslaan in de database.";
        }
    } else {
        echo "Er ging iets mis tijdens het verzenden.";
    }
}
?>
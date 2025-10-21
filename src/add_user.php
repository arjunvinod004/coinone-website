<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
// $username = "coinoneuser";
// $password = "Coinoneuser@123";
$dbname = "coinone";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';

if (!empty($name) && !empty($email) && !empty($phone) && !empty($password)) {
    $stmt = $conn->prepare("INSERT INTO your_table_name (name, email, phone) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $phone);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "User added successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Insert failed"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Missing fields"]);
}

$conn->close();
?>

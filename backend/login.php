<?php
include('connection.php');


$user = $_POST['user'];
$password = $_POST['password'];

$query = $mysqli->prepare('select user_id,user_email,password,user_name
from users
where user_email=? or user_name=?');
$query->bind_param('ss', $user);
$query->execute();
$query->store_result();
$query->bind_result($id, $email, $hashed_password, $name);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {

$query = $mysqli->prepare('select company_id,company_email,password,user_name
from companies
where company_email=? or company_name=?');
$query->bind_param('ss', $user);
$query->execute();
$query->store_result();
$query->bind_result($id, $email, $hashed_password, $name);
if ($num_rows == 0) {
$response['status'] = "user not found";


} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['user_id'] = $id;
        $response['name'] = $name;
        $response['email'] = $email;
    } else {
        $response['status'] = "incorrect credentials";
    }
}

} 
else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['user_id'] = $id;
        $response['name'] = $name;
        $response['email'] = $email;
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);

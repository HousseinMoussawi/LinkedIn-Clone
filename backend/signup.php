<?php

include 'connection.php';

$user = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$type = $_POST['type'];

if($type == "company"){
    $query = $mysqli->prepare('select company_email, company_name from companies where company_email=? or company_name=?');
    $query->bind_param('ss', $email, $user);
    $query->execute();
    $query->store_result();
    $exists = $query->num_rows();


    if($exists == 0){
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $query = $mysqli->prepare('insert into companies (company_name, company_email, password) values (?, ?, ?)');
        $query->bind_param('sss', $user, $email, $hashed_password);
        $query->execute();
        $response['status'] = "success";

    } else {
        $response['status'] = "user already exists";
    }
}

else{
    $query = $mysqli->prepare('select user_email, user_name from users where user_email=? or user_name=?');
    $query->bind_param('ss', $email, $user);
    $query->execute();
    $query->store_result();
    $exists = $query->num_rows();

    if($exists == 0){
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $query = $mysqli->prepare('insert into users (user_name, user_email, password) values (?, ?, ?)');
        $query->bind_param('sss', $user, $email, $hashed_password);
        $query->execute();
        $response['status'] = "success";

    } else {
        $response['status'] = "user already exists";
    }

}

echo json_encode($response);

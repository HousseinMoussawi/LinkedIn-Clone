<?php

include 'connection.php';

$query = $mysqli->prepare('select * from companies');
$query->execute();
$query->store_result();
$query->bind_result($id, $name, $email,$password, $description, $followers, $image);
$exists = $query->num_rows();

if($exists > 0){
    $response['status'] = "success";
    $response['companies'] = [];
    while($query->fetch()){
        $company = [
            'id' => $id,
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'description' => $description,
            'followers' => $followers,
            'image' => $image
        ];
        array_push($response['companies'], $company);       
    }
} else {
    
}

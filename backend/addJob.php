<?php

include 'connection.php';

$company = $_POST['company'];
$description = $_POST['description'];
$applicants=0;


$query = $mysqli->prepare('insert into jobs (company_id,description,applicants) values (?,?,?)');
$query->bind_param('ssi',$company, $description,$applicants);
$query->execute();

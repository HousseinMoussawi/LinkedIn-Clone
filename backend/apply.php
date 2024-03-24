<?php

include 'connection.php';

$user = $_POST['user'];
$job = $_POST['job'];
$company = $_POST['company'];

$query = $mysqli->prepare('insert into job-applications (user_id,job_id,company_id) values(?,?,?)');
$query-> bind_param('iii',$user,$job,$company);
$query-> execute();
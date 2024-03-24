<?php

include 'connection.php';

$user = $_POST['username'];
$content = $_POST['content'];
$image = $_POST['image'];

$query = $mysqli->prepare('insert into posts (post_username, content, image) values (?, ?, ?)');
$query->bind_param('sss', $user, $content, $image);
$query->execute();

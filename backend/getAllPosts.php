<?php

include 'connection.php';

$query = $mysqli->prepare('select * from posts');
$query->execute();
$query->store_result();
$query->bind_result($id, $poster, $content, $image);
$exists = $query->num_rows();

if($exists > 0){
    $response['status'] = "success";
    $response['posts'] = [];
    while($query->fetch()){
        $post = [];
        $post['id'] = $id;
        $post['poster'] = $poster;
        $post['content'] = $content;
        $post['image'] = $image;
        array_push($response['posts'], $post);
    }
} else {
    $response['status'] = "no posts";
}

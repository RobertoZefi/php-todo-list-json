<?php

$string = file_get_contents('task.json');


$tasks = json_decode($string, true);


$new_task = isset($_POST['task']) ? $_POST['task'] : null;


if($new_task !== null){
    $tasks[] = $new_task;
}

$task_string = json_encode($tasks);
file_put_contents('task.json', $task_string);


header('Content-Type: application/json');
echo $task_string;



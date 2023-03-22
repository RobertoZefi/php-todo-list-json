<?php

$string = file_get_contents('task.json');

$tasks = json_decode($string, true);

header('Content-Type: application/json');


<?php 

$user = "admin";
$pass = "admin";

if ($_POST['user'] === $user && $_POST['password'] === $pass)
{
	header("location:pasouno.html");
}  
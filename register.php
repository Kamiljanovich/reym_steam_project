<?php
 require_once('db.php');
$login = $_POST['login'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];
$email = $_POST['email'];



if(empty($login) || empty($pass) || empty($repeatpass) || empty($email)){
    echo "Zapolnite vse polya";
}else{
    if($pass != $repeatpass){

        echo"Paroli ne sovpadayut";   
    }else{
        $sql = "INSERT INTO `users` (login,pass,email) VALUES ('$login', '$pass', '$email')";
        if($conn -> query($sql) === TRUE){
            echo "Uspeshnaya registratsiya";   
        }else{
            echo "Oshibkaaaaa". $conn->error;
        }
    }
}
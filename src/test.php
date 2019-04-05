<?php
$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");
$servername = "localhost";
$username = "root";
$password = "";
$conn = new mysqli($servername, $username, $password, "project_new");
if ($conn->connect_error) { die("Connection failed: " . $conn->connect_error);
} else { echo "Connected successfully"."<br>";}

$sql="SELECT point FROM grades WHERE id_class='9A' and  type='final'";
echo $sql."<br>";
$myArray = array();
if ($result = $conn->query($sql)) { 
  while($row = $result->fetch_array(MYSQLI_ASSOC)) { 
      $myArray[] = $row;
  }
   echo json_encode($myArray);
   echo "<br>";
}
$count_less_25=0;
$count_eq_25=0;
$count_greater_25=0;
$n=count($myArray);
//echo $n."<br>";
$result=array();
foreach ($myArray as $value) {
  $arr=implode($value);
  echo $arr."<br>";
  if($arr==25){
    $count_eq_25++; 
  }else if($arr <25){
    $count_less_25++; 
  }else if($arr>25){
    $count_greater_25++;
  }
}

echo "<br>";
echo $count_eq_25."<br>";
echo $count_greater_25."<br>";
echo $count_less_25."<br>";
require('testtt.php');

header("Location: http://localhost/aya_test/test/src/testtt.php?less=$count_less_25,equal=$count_eq_25,greater=$count_greater_25");
//$insert="INSERT INTO final(class_id,less,equal,greater) VALUES('9A','$count_less_25','$count_eq_25','$count_greater_25')";







































































/*
$sql="SELECT * FROM grades WHERE id_class='9A'";
//echo $sql."<br>";
$myArray = array();
$myId = array();
$myPoint = array();
if ($result = $conn->query($sql)) { 
    while($row = $result->fetch_array(MYSQLI_ASSOC)) { 
        $myArray[] = $row;
    }
     echo json_encode($myArray);
     echo "<br>";
     foreach ($myArray as $value) {
          $id=next($value);
         // echo $id."<br>";
          $myId[]=$id;  
     }
     $result_duplicate_remove = array_unique($myId);
     //print_r( $result_duplicate_remove);
     foreach ($result_duplicate_remove  as  $value) {
       $sum="SELECT point FROM grade WHERE id=$value";
       //echo $sum."<br>";
      /* if($res=$conn->query($sum)){
         echo 'aya';
         while($r1=$res->fetch_array(MYSQLI_ASSOC)){
           $myPoint[]=$r1;
         }
         echo json_encode($myPoint);
       }*/
   //  }
//}


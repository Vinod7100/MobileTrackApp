<?php
require_once('config.php');
		if($_REQUEST['username']=='')
		{
		echo "Required Name";

		}
		else
		{
		$username = $_REQUEST['username'];
		
		}
		$email = $_REQUEST['email'];
		$password = $_REQUEST['password'];
		$type = $_REQUEST['type'];
		

		
			/*** INSERT data ***/
			/*$query = $dbh->prepare("INSERT INTO users(name, email, password, token, status, type) VALUES ('$username', '$email', '$password', 'tocken', 'registered', '$type')");
			$query->execute();
			$count = $query->rowCount();
			if(!$count)
			{
			 echo"fomm submit";	
			}
			else{
				echo '<div class="alert alert-danger">';
					echo"something wrong";
				echo '</div>';
			}*/
		
	
?>
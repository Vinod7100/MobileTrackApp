<?php
function is_email_exixts($email){
		global $dbh;
		
		$count = $dbh->prepare("SELECT * FROM register WHERE email = '$email'");
		$count->execute();
		
		$count = $count->rowCount();
		return $count;
	}
function is_user_name_exists($username){
		global $dbh;
		
		$count = $dbh->prepare("SELECT * FROM register WHERE username = '$username'");
		$count->execute();
		
		$count = $count->rowCount();
		return $count;
	}

	
?>
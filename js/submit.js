 /* attach a submit handler to the registration form */
 $("#register").submit(function(event) {
	var data = $("#register").serialize();
	event.preventDefault();

	$('#loading').show();
	var dataString = 'action=register&'+ data;
	console.log(dataString);
	
		 $.ajax({
			type: "POST",
			url: "http://parssv.com/trackapp_php/",
			data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			dataType: 'json',

			beforeSend:function() {console.log(dataString);},
			success: function(data) {
				if(data.success="true"){
					$('#message').html('<div id="msg" class="alert alert-success"></div>');
					$('#msg').append(data.message);
					$.mobile.changePage($("#verify"), "slideup");
				}
				if(data.error="true"){
					$('#message').html('<div id="msg" class="alert alert-danger"></div>');
					$('#msg').append(data.message);
				}
			},
			error: function(data) {
				console.log(data);
			 }
		  });
		  return false;
		
});


/* attach a submit handler to the forgot-password form */
 $("#recover").submit(function(event) {
	var data = $("#recover").serialize();
	event.preventDefault();

	$('#loading').show();
	var dataString = 'action=recover&'+ data;
	console.log(dataString);
	
		 $.ajax({
			type: "POST",
			url: "http://parssv.com/trackapp_php/",
			data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			dataType: 'json',

			beforeSend:function() {console.log(dataString);},
			success: function(data) {
				if(data.success="true"){
					$('#rmsgBox').html('<div id="msg" class="alert alert-success"></div>');
					$('#msg').append(data.message);
				}
				if(data.error="true"){
					$('#rmsgBox').html('<div id="msg" class="alert alert-danger"></div>');
					$('#msg').append(data.message);
				}
			},
			error: function(data) {
				console.log(data);
			 }
		  });
		  return false;
		
});

/*$(document).on("pageinit", "#login", function() {
        console.log( "document loaded" );
		if (localStorage.getItem("trackUsername") !== "") {
		var trackUsername = localStorage.getItem("trackUsername");
		var trackPassword = localStorage.getItem("trackPassword");
		$('#loading').show();
		var dataString = 'action=login&username='+ trackUsername +'&password='+ trackPassword ;
		console.log(dataString);
		$.ajax({
			type: "POST",
			url: "http://parssv.com/trackapp_php/",
			data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			dataType: 'json',

			beforeSend:function() {console.log(dataString);},
			success: function(data) {
				if(data.success="true"){
					if(data.status == 'verified'){
						$.mobile.changePage($("#home"), "slideup");
					}
				}
			}
			});
		  return false;
	}
    });*/
	
$(document).on("pageinit", function(event) {
	//$.jStorage.deleteKey('session');//logout script
    var session = $.jStorage.get('session', ''); // syntax: $.jStorage.get(keyname, "default value")
	console.log(session);
	
    // See: https://github.com/jquery/jquery-mobile/issues/3384
    var activePage = $(event.target);

    // if the current page is not the login_page *and* there is no session *then* redirect to the login_page
    if(activePage[0].id != 'login' && (!session) ){

        $.mobile.changePage("#login");

    }

    // if the current page *is* the login *and* there is already a session *then* redirect to landing page
    if(activePage[0].id == 'login' && session ){

        $.mobile.changePage("#home");

    }

});

	
/* attach a submit handler to the login form */
 $("#loginUser").submit(function(event) {
	var data = $("#loginUser").serialize();
	event.preventDefault();
		
	$('#loading').show();
	var dataString = 'action=login&'+ data;
	//console.log(dataString);
	
		 $.ajax({
			type: "POST",
			url: "http://parssv.com/trackapp_php/",
			data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			dataType: 'json',

			beforeSend:function() {console.log(dataString);},
			success: function(data) {
				if(data.success="true"){
					$('#msgBox').html('<div id="msg" class="alert alert-success"></div>');
					$('#msg').append(data.message);
					
					if(data.status == 'verified'){
						
						
						// .. do whatever validation here
						if(data.username){

							// .. if good to go, create the session
							$.jStorage.set('session', data.username, {TTL: 28800000});
							// syntax:  $.jStorage.set('keyname', 'keyvalue', {TTL: milliseconds}); // {TTL... is optional time, in milliseconds, until key/value pair expires}
							console.log("session set");
							// redirect to whatever page you need after a successful 'login'
							$.mobile.changePage($("#home"), "slideup");

						}else{

							$('#msgBox').html('<strong>Please provide a name before proceeding</strong>');

						}
							
							 
					}

				}
				if(data.error="true"){
					$('#msgBox').html('<div id="msg" class="alert alert-danger"></div>');
					$('#msg').append(data.message);
				}
			},
			error: function(data) {
				console.log(data);
			 }
		  });
		  return false;
		
});

/* attach a submit handler to the verify form */
 $("#verifyUser").submit(function(event) {
	var data = $("#verifyUser").serialize();
	event.preventDefault();

	$('#loading').show();
	var dataString = 'action=verify&'+ data;
	console.log(dataString);
	
		 $.ajax({
			type: "POST",
			url: "http://parssv.com/trackapp_php/",
			data: dataString, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			dataType: 'json',

			beforeSend:function() {console.log(dataString);},
			success: function(data) {
				if(data.success="true"){
					$('#vmsgBox').html('<div id="msg" class="alert alert-success"></div>');
					$('#msg').append(data.message);

				}
				if(data.error="true"){
					$('#vmsgBox').html('<div id="msg" class="alert alert-danger"></div>');
					$('#msg').append(data.message);
				}
			},
			error: function(data) {
				console.log(data);
			 }
		  });
		  return false;
		
});



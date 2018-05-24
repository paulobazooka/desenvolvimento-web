$(document).ready(function () {
		
	$('#email').blur(function(event) {
		var email = $(this).val();
		
		for (var i = 0 ; i < email.length; i++) {
			if(email[i] == '@'){
				console.log("Email ok!");
				$(this).css("background", "");
			}else {
				$(this).css("background", "red");
			}

		}
	});




	$('#user').blur(function(event) {
		var user = $(this).val();

		if(user.length > 4 && user.length < 11){
			console.log("Usuário OK!")
			$(this).css("background", "");
		}else {
			$(this).css("background", "red");
		}
	});



	$('#pwd').blur(function(event) {
		var pwd = $(this).val();
        var teste = '/^(https?://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$/';
		var bol = true;

		var numero = /\d/.test(pwd);
		var letra= /^[a-zA-Z0-9]+$/.test(pwd)
		var

		if(pwd.length > 10){
			console.log("Senha OK!");
			$(this).css("background", "");
		}else {
			$(this).css("background", "red");
		}
	});


});


$(document).ready(function () {

	$('button').click(function(event) {
		$('#resultado').html("");
		var endereco = $('#endereco').val();
		
		if(endereco != null){			
			
			$.ajax({
	    		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + endereco + '&key=AIzaSyBzBYyN79Mn7gL2m3OruLFewOJ7qNhAzvY', 
	   		    type: 'GET',
	    		success: function(res) {
	    			
	    			console.log(res);

	    			for (var i = 0; i < res.results.length; i++) {
	    					var resultado = '<h5 class="card-title"><strong>Resultado ' + i + '</strong><h5>';
	    					var address = '<h6>' + res.results[i].formatted_address + '<h6><br>'; 
	    					$('#resultado').append(resultado + address);
	    			}	
	       		}
			});
		}
	});

});


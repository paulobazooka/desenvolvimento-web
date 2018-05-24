function enviar() {
	var peso   = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	
	if(peso != 0 && altura != 0){
		var xhr = new XMLHttpRequest();

		xhr.open("GET", 'http://andrebordignon.esy.es/php/imc.php?peso='+peso+'&altura='+altura, true);
		xhr.send();

		xhr.onreadystatechange = function () {
	        
	        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
	          
	            var obj = JSON.parse(xhr.responseText); 
	           
	            imc = obj.imc;
	            mensagem = obj.mensage;

	            document.getElementById('resultado').innerHTML = "<b>IMC:</b> " + imc + " - <b>Mensagem:</b> " + mensagem;
	        } else {
	        	document.getElementById('resultado').innerHTML = "erro!"
	        }
    	};
	}

	
}
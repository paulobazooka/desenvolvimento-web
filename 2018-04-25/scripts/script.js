
function limparCampos(){
	document.getElementById('conta').value='';
}


function validarCampos(){
	var conta = document.getElementById('conta');
	var tipo = document.getElementById('tipo');
	var valor = document.getElementById('valor');

	alert(conta + " " + tipo + " " + valor);
}
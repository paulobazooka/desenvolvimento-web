$(document).ready(function () {
		
	var cont = 0;	

	$('#inserir').click(function(event){
		var frase = $('#frase').val();
		$('#frase').val('');
		cont++;
		$('#texto').append('<p id="' + cont + '" onClick="clicou(this.id);" ondblclick="apagar(this.id);">' + frase + '<p>');
	});
});


function apagar(id){
	console.log('apagar')
	 var id_ = "#" + id;	
	 $(id_).remove();	
}

function clicou(id){
	 var id_ = "#" + id;	
	 $(id_).attr('style', 'background-color: yellow');
	console.log("atributo");
};
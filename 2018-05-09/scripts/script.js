
function limparCampos(){
	document.getElementById('conta').value='';
	document.getElementById('valor').value='';
}



function validarCampos(){
	var conta = document.getElementById('conta').value;
	var valor = document.getElementById('valor').value;	
	var tipo = document.querySelector('input[name=tipo]:checked').value;

	inserirLinha(conta, valor, tipo);
}



function inserirLinha(conta, valor, tipo){

	var tbody = document.getElementsByTagName("table")[0];
	var linha = tbody.insertRow(-1);
	
	var col0 = linha.insertCell(0);
	var col1 = linha.insertCell(1);
	var col2 = linha.insertCell(2);
	var col3 = linha.insertCell(3);

	var button = document.createElement("button");
	button.setAttribute("type", "button");
	button.setAttribute("class", "btn-sm btn-danger");
	button.setAttribute("value", "x");
    
    col0.append(document.createTextNode(conta));
    col1.append(document.createTextNode(valor));
    col2.append(document.createTextNode(tipo));
    col3.append(button);

    
}
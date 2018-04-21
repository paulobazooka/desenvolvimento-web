function exibeDados(){
    var nome = document.getElementById('nome').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var dataNasc = document.getElementById('dtnas').value;
    var msg = '';
    
    if(nome == ''){
        msg = "Nome não pode estar vazio.\n";
    }
    
    if(dataNasc == ''){
        msg = msg + "Data de Nascimento não pode estar vazio.\n"
    }    
    
    if(rua == ''){
        msg = msg + "Rua não pode estar vazio.\n";        
    }
    
    if(bairro == ''){
       msg = msg + "Bairro não pode estar vazio!\n"
    }
    
    if(msg != ''){
        document.getElementById('feedback').innerText = msg;
    }
    
    document.getElementById('bloco2').innerText = 
        nome +   '\n' +
        rua  +   '\n' +
        bairro + '\n' +
        cidade + '\n' +
        estado + '\n' +
        dataNasc + '\n';
}


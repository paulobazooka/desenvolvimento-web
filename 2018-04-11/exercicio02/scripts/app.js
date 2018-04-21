var animal = '';
var animais = new Array();

function incluirInicio(){
    animal = document.getElementById('animal').value;
    animais.unshift(animal);
    document.getElementById('animal').value="";
}


function incluirFinal(){
    animal = document.getElementById('animal').value;
    animais.push(animal);
    document.getElementById('animal').value="";
}


function removerInicio(){
    animal = document.getElementById('animal').value;
    animais.shift();
    document.getElementById('animal').value="";
}

function removerFinal(){
    animal = document.getElementById('animal').value;
    animais.pop();
    document.getElementById('animal').value="";
}


function exibirAnimais(){
    document.getElementById('saida').innerText = animais;
    document.getElementById('animal').value="";
}

function aleatorio(){
    document.getElementById('animal').value="";
    var indice = 0;  

    if(animais.length > 0){
        var max = animais.length;        
        indice = Math.floor(Math.random() * max);
        document.getElementById('saida').innerText = animais[indice];
    }    
}

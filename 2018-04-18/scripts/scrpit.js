var livros = new Array();
var indice;

function criarLivro(){
    
    var livro = new Object();
    
    livro.nome = document.getElementById('nome').value;
    livro.autor = document.getElementById('autor').value;
    livro.editora = document.getElementById('editora').value;
    livro.paginas = document.getElementById('paginas').value;
    livro.genero = document.getElementById('genero').value;
    
    livros.push(livro);
    document.getElementById('nome').value= ""; 
    document.getElementById('autor').value= "";
    document.getElementById('editora').value= "";
    document.getElementById('genero').value= "";
    document.getElementById('paginas').value= "";
}


function imprimirLivros(){
    var texto = '';
    for(var i=0; i<livros.length; i++) {
        console.log(i, livros[i]);
        texto+= "Livro: " + livros[i].nome + "  Autor: " + livros[i].autor + " Editora: " + livros[i].editora + 
                          " Genero: " + livros[i].genero + " páginas" + livros[i].paginas + "\n";
        document.getElementById('bloco4').innerText = texto;
    }
}


function apagarLivro(){
    var nome_livro = document.getElementById('nomelivro').value;
    
    for(var i=0; i<livros.length; i++) {
        if(nome_livro == livros[i].nome){
            console.log(i, livros[i]);
            livros.splice(i, 1);
            document.getElementById('nomelivro').value= ""; 
        }
    }  
}


function buscarLivro(){
    var nome_livro = document.getElementById('altnome').value;
    
    for(var i=0; i<livros.length; i++) {
        if(nome_livro == livros[i].nome){
            indice = i;
            document.getElementById('altnome').value = livros[i].nome;
            document.getElementById('altautor').value = livros[i].autor;
            document.getElementById('alteditora').value = livros[i].editora;
            document.getElementById('altpaginas').value = livros[i].paginas;
            document.getElementById('altgenero').value = livros[i].genero;
        }
    }  
}




function alterarLivro(){
    
    if(livros.length > 0 && indice != null){
         livros[indice].nome = document.getElementById('altnome').value;
         livros[indice].autor = document.getElementById('altautor').value;
         livros[indice].editora = document.getElementById('alteditora').value;
         livros[indice].paginas = document.getElementById('altpaginas').value;
         livros[indice].genero = document.getElementById('altgenero').value;
         
        document.getElementById('altnome').value= ""; 
        document.getElementById('altautor').value= "";
        document.getElementById('alteditora').value= "";
        document.getElementById('altgenero').value= "";
        document.getElementById('altpaginas').value= "";
        
        console.log(livros[indice]);
    }
}
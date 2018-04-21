var nome;
var idade;
        
nome  = prompt("Qual o seu nome?");
idade = parseInt(prompt("Qual a sua idade?"));
        
document.write(nome + " " + idade);
document.write("<br>");        
if(idade > 18){
   document.write("O usuário é maior de 18 anos!");
}
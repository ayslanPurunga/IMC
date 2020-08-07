//parametros
var nome = prompt('Informe o nome da pessoa');
var altura = prompt('informe a altura da pessoa em centímetros');
var peso = prompt('Informe o peso da pessoa');

//conversao de caracteres
altura = parseFloat(altura);
peso = parseFloat(peso);

//conversao de altura para Mts
altura = altura / 100;

//realiza o calculo
var imc = peso / (altura * altura);

var classificacao = '';

if (imc < 16) {
    classificacao = 'Baixo peso muito grave';
}else if(imc >= 16 && imc <= 16.99){
    classificacao = 'Baixo peso grave';
}else if(imc >= 17 && imc <= 18.49){
    classificacao = 'Baixo peso';
}else if(imc >=18.5 &&imc <= 24.99){
    classificacao = 'peso normal';
}else if(imc >= 25 && imc <= 29.99){
    classificacao = 'sobre peso';
}else if(imc >=30 && imc <=34.99){
    classificacao = 'Obesidade grau I';
}else if(imc >= 35 && imc <= 39.99){
    classificacao = 'Obesidade grau II'
}else if(imc >=40){
    classificacao = 'Obesidade grau III (mórbida)'
}else{
    classificacao = 'fecha a boca meu filho(a)'
}

document.write(nome + ' possui indice de massa corporal igual á '+imc+' sendo classificado como: ' +classificacao);

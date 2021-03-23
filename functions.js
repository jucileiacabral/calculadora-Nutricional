// se deixar as variaveis aqui elas ficam globais o ideal é coloca las dentro da função

const calcular = document.getElementById('calcular');

//nome.value ="";  (to pegando o valor dos elementos )

function imc ( ){
    const paciente = document.getElementById('paciente').value; // pelo id criado no html vou chamar o documento html pega o elemento pelo id
    const altura = document.getElementById('altura').value; // como so vou usar o valor uso value no final 
    const peso = document.getElementById('peso').value;
    const idade = document.getElementById('idade').value;
    const genero = document.getElementById('genero').value;
    const resultado = document.getElementById('resultado'); // aqui nao vai value pois vou atribuir ao html o valor 

   //criando alerta de campo vazio 
    if (paciente  !== ' '  &&  altura  !== ' '   &&  peso  !==' ' && idade !==' ' && genero !==' '){ 

        const valorIMC = (peso /  (altura * altura)).toFixed(2);// to fixed para colocar numero de casas que quero 

             let classificacao = "" ;

             if  (valorIMC<18.5){
            classificacao ='Você está magro com esse indice: ' ;
            }
            else if (valorIMC>=18.5 && valorIMC<24.9){
            classificacao="Você está normal com esse indice: " ;
            }
             else if (valorIMC>=25 && valorIMC<29.9) {
            classificacao="Você está com sobre peso com esse indice: " ;
            }
            else if (valorIMC>=30 && valorIMC<39.9) {
            classificacao="Você está com obesidade com esse indice: " ;
            }
            else if (valorIMC>40){
            classificacao="Você está com obesidade grave com esse indice: " ;
            }

         resultado.textContent =`${paciente}  ${ valorIMC}  ` ;
        
    }else{ 
        resultado.textContent =  ' Preencha todos os campos!!';// assim em vez de alerta aparece no campo text  resultado 
    }      
}
calcular.addEventListener('click ', imc ); 
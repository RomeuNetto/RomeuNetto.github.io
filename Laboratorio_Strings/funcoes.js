function numPalavras(){
    let texto= document.getElementById('texto').value;
    let resposta1= document.getElementById('resposta1');
    let quantVet = texto.split(' ').length;
    resposta1.innerHTML=quantVet;
}
function totalLetras(){
    let texto= document.getElementById('texto').value;
    let resposta2= document.getElementById('resposta2');
    let quantEspacos= (texto.split(' ').length)-1;
    let quantLetras= texto.length;
    resposta2.innerHTML=quantLetras-quantEspacos;
}
function ocorrenciaPalavras(){
    let texto= document.getElementById('texto').value;
    let resposta3= document.getElementById('resposta3');
    let texto2= texto.split(" ");
    let ocorrencias= (texto.match(/texto2/g) || []).length; 
    resposta3.innerHTML=  ocorrencias;
}
function localizarPalavra(){
    let texto= document.getElementById('texto').value;
    let palavra= document.getElementById('palavra').value;
    let resposta4= document.getElementById('resposta4');
    let local= texto.indexOf("palavra");
    if(local== -1){
        resposta4.innerHTML= "a palavra não foi localizada";
    }
    else{
        resposta4.innerHTML= texto.substring(local,(texto.length)-1);
    }
}
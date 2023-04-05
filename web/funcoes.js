    var x=document.getElementById('x').value;
    var y=document.getElementById('y').value;
    var z=document.getElementById('z').value;
function soma(){
    var resposta1=document.getElementById('resposta1');
    resposta1.innerHTML= x+y;
    }
function maior(){
    var resposta2=document.getElementById('resposta2');
    if(x>y) resposta2.innerHTML="x>y";
    else if(y>x) resposta2.innerHTML="y>x";
    else resposta2.innerHTML="x=y";
}
function primo(){
    var resposta3=document.getElementById('resposta3');
    var divisores=0;

    for(var count=1 ; count<=numero ; count++)
    {
     if(x % count == 0)
         divisores++;
    }
    if(divisores==2)
        resposta3.innerHTML='É primo';
    else
        resposta3.innerHTML='Não é primo';
   
    
}
function calcHipotenusa(){
    var resposta4= document.getElementById('resposta4');
    var hipotenusa= Math.sqrt(Math.pow(x)+Math.pow(y));
    resposta4=hipotenusa;
}
function newSalario(){
    var resposta5= document.getElementById('resposta5');
    var valorReajuste= x * (y / 100);
    var novoSalario= x+valorReajuste;
    resposta5.innerHTML= novoSalario;
}
function transTemperatura(){
    var resposta6= document.getElementById('resposta6');
    y=((x-32)/9);
    y=y/5;
    resposta6.innerHTML=y;
}
function mediaFinal(){
    var resposta7= document.getElementById('resposta7');
    var medFinal=(x*2+y*3+z*5)/10;
    resposta7.innerHTML=medFinal;
}
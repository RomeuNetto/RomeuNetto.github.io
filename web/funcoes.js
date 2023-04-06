function soma(){
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let resposta1=document.getElementById('resposta1');
    resposta1.innerHTML= x+y;
    }
function maior(){
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let resposta2=document.getElementById('resposta2');
    if(x>y) resposta2.innerHTML="x>y";
    else if(y>x) resposta2.innerHTML="y>x";
    else resposta2.innerHTML="x=y";
}
function primo(){
    let x=document.getElementById('x').value;
    let resposta3=document.getElementById('resposta3');
    let divisores=0;

    for(let count=1 ; count<=numero ; count++)
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
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let resposta4= document.getElementById('resposta4');
    var hipotenusa= Math.sqrt(Math.pow(x)+Math.pow(y));
    resposta4=hipotenusa;
}
function newSalario(){
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let resposta5= document.getElementById('resposta5');
    let valorReajuste= x * (y / 100);
    let novoSalario= x+valorReajuste;
    resposta5.innerHTML= novoSalario;
}
function transTemperatura(){
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let resposta6= document.getElementById('resposta6');
    y=((x-32)/9);
    y=y/5;
    resposta6.innerHTML=y;
}
function mediaFinal(){
    let x=document.getElementById('x').value;
    let y=document.getElementById('y').value;
    let z=document.getElementById('z').value;
    let resposta7= document.getElementById('resposta7');
    let medFinal=(x*2+y*3+z*5)/10;
    resposta7.innerHTML=medFinal;
}
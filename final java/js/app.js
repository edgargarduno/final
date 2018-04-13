var operacion="";

function escribir(n){

  var numero=document.getElementById("display").innerHTML;
  var n1=nemero.length
  var punto=numero.indexOf(".")
  var repeticion=0

  for (var i = 0; i <numero.length; i++) {
    if (numero.charAt(i)==".") {
      repeticion++;
    }
  }

  if (numero=="0" && n!='.') {
    displayN =numero.replace("0","");
    document.getElementById("display").innerHTML=displayN+n;
  } else if(n1<8 && punto==-1){
      if (n=='.' && repeticion>0) {
      document.getElementById("display").innerHTML=numero;
      } else {
          document.getElementById("display").innerHTML=numero+n;
          repeticion=0;
        }
    } else if (n1<9 && punto!=-1) {
        if (n=='.' && repeticion>0) {
            document.getElementById("display").innerHTML=numero;
        } else {
            document.getElementById("display").innerHTML=numero+n;
            repeticion=0;
          }
      }
}
function escribir1(x){
    MouseOver(x);
    escribir(x);
}

function limpiar(){
  MouseOver('on');
  document.getElementById("display").innerHTML=0;
  operacion="";
}

function masmenos(){
  MouseOver('sign');
  var numero=document.getElementById("display").innerHTML;
  if (numero>0) {
    document.getElementById("display").innerHTML="-"+numero;
  }else {
    displayN=nuemro.replace(/[-|(|)]/g, "")
    document.getElementById("display").innerHTML=displayN;
  }
}

function aritmetica(x){
  var numero=document.getElementById("display").innerHTML;
if (numero!="" && operacion=="") {
  operacion=numero+x;
  document.getElementById("display").innerHTML="";
}else if (numero!="") {
  operacion=operacion+numero+x;
  document.getElementById("display").innerHTML="";
  }
}
function aritmetica1(x){
  aritmetica(x);
  MouseOver(x);
}

function calcular(){
  var numero=document.getElementById("display").innerHTML;
  var resultado=eval(operacion+numero);
  var cadena=resultado.toString()
  var punto=numero.indexOf(".")
  var n1=cadena.length
  if (n1<8) {
    document.getElementById("display").innerHTML=cadena.substr(0,8);
    operacion="";
  } else if(n1>7){
      document.getElementById("display").innerHTML=cadena.substr(0,9);
      operacion="";
    }
}

function raiz(){
  var numero=document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML=Math.sqrt(numero);
  MouseOver('raiz');
}

//efectos
function MouseOver(x) {
  document.getElementById(x).style="width:19%; height:60px"
}
function MouseOut(x) {
  document.getElementById(x).style="width:22%; height:62.91px"
}

var oper="";

function escribir(n){

  var num=document.getElementById("display").innerHTML;
  var n1=num.length
  var punto=num.indexOf(".")
  var repeticion=0

  for (var i = 0; i < num.length; i++) {
    if (num.charAt(i)==".") {
      repeticion++;
    }
  }

  if (num=="0" && n!='.') {
    displayN =num.replace("0","");
    document.getElementById("display").innerHTML=displayN+n;
  } else if(n1<8 && punto==-1){
      if (n=='.' && repeticion>0) {
      document.getElementById("display").innerHTML=num;
      } else {
          document.getElementById("display").innerHTML=num+n;
          repeticion=0;
        }
    } else if (n1<9 && punto!=-1) {
        if (n=='.' && repeticion>0) {
            document.getElementById("display").innerHTML=num;
        } else {
            document.getElementById("display").innerHTML=num+n;
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
  oper="";
}

function masmenos(){
  MouseOver('sign');
  var num=document.getElementById("display").innerHTML;
  if (num>0) {
    document.getElementById("display").innerHTML="-"+num;
  }else {
    displayN=num.replace(/[-|(|)]/g, "")
    document.getElementById("display").innerHTML=displayN;
  }
}

function aritmetica(x){
  var   num=document.getElementById("display").innerHTML;
if (num!="" && oper=="") {
  oper=num+x;
  document.getElementById("display").innerHTML="";
}else if (num!="") {
  oper=oper+num+x;
  document.getElementById("display").innerHTML="";
  }
}
function aritmetica1(x){
  aritmetica(x);
  MouseOver(x);
}

function calcular(){
  var num=document.getElementById("display").innerHTML;
  var resultado=eval(oper+num);
  var cadena=resultado.toString()
  var punto=num.indexOf(".")
  var n1=cadena.length
  if (n1<8) {
    document.getElementById("display").innerHTML=cadena.substr(0,8);
    oper="";
  } else if(n1>7){
      document.getElementById("display").innerHTML=cadena.substr(0,9);
      oper="";
    }
}

function raiz(){
  var num=document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML=Math.sqrt(num);
  MouseOver('raiz');
}

//efectos
function MouseOver(x) {
  document.getElementById(x).style="width:19%; height:60px"
}
function MouseOut(x) {
  document.getElementById(x).style="width:22%; height:62.91px"
}

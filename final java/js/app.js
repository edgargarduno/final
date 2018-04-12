//Variables opreciones
var num1;
var num2;
var operacion;

function init(){
	//variables general
	var display = document.getElementById('display');
	var reset = document.getElementById('reset');
	var mas = document.getElementById('mas');
	var menos = document.getElementById('menos');
	var por = document.getElementById('por');
	var dividido = document.getElementById('dividido');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');
	var cero = document.getElementById('0');
	var punto = document.getElementById('punto')

	//eventos de click
	uno.onclick = function(e){
  		display.textContent = display.textContent  + "1";
	}
	dos.onclick = function(e){
  		display.textContent = display.textContent  + "2";
	}
	tres.onclick = function(e){
  		display.textContent = display.textContent  + "3";
	}
	cuatro.onclick = function(e){
  		display.textContent = display.textContent  + "4";
	}
	cinco.onclick = function(e){
  		display.textContent = display.textContent  + "5";
	}
	seis.onclick = function(e){
  		display.textContent = display.textContent  + "6";
	}
	siete.onclick = function(e){
  		display.textContent = display.textContent  + "7";
	}
	ocho.onclick = function(e){
  		display.textContent = display.textContent  + "8";
	}
	nueve.onclick = function(e){
  		display.textContent = display.textContent  + "9";
	}
	cero.onclick = function(e){
  		display.textContent = display.textContent  + "0";
	}
	on.onclick = function(e){
  		resetear();
	}
	mas.onclick = function(e){
  		num1 = display.textContent;
  		operacion = "+";
  		limpiar();
	}
	menos.onclick = function(e){
  		num1 = display.textContent;
  		operacion = "-";
  		limpiar();
	}
	por.onclick = function(e){
  		num1 = display.textContent;
  		operacion = "*";
  		limpiar();
	}
	dividido.onclick = function(e){
  		num1 = display.textContent;
  		operacion = "/";
  		limpiar();
	}
	igual.onclick = function(e){
  		num2 = display.textContent;
  		resolver();
	}

}


function limpiar(){
	display.textContent = "";
}

function resetear(){
	display.textContent = "";
	num1 = 0;
	num2 = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(num1) + parseFloat(num2);
			break;

		case "-":
		    res = parseFloat(num1) - parseFloat(num2);
		    break;

		case "*":
			res = parseFloat(num1) * parseFloat(num2);
			break;

		case "/":
			res = parseFloat(num1) / parseFloat(num2);
			break;
	}
	resetear();
	display.textContent = res;

}

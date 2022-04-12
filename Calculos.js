//Nota para el profe: Me gusta comentar el documento para no perderme cuando regrese en el futuro para ver como hice tal cosa
//Zona de funciones para obtener los datos

//Función que obtiene el p que contiene el historial de la operación ubicado en el div historial
function obtenerHistorialCalculo(){
	return document.getElementById("valorHistorial").innerText;
}
//Función para obtener el valor de la etiqueta p contenida en el div Salida 
function obtenerSalida(){
	return document.getElementById("valorSalida").innerText;
}

//Fin zona de recolección de datos

//Zona para imprimir resultados
//Funcion para imprimir el resultado
function imprimirHistorial(num){
	document.getElementById("valorHistorial").innerText=num;
}
//Funcion para imprimir la salida
function imprimirSalida(num){
	if(num==""){ //si es vacio
		document.getElementById("valorSalida").innerText=num; 
	}
	else{ // sino 
		document.getElementById("valorSalida").innerText=obtenerNumeroFormato(num);
	}	
}


//Fin de la zona

//Zona de procedimientos

//Funcion para obtener el numero y convertirlo
function obtenerNumeroFormato(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en"); // Convierte el numero y lo convierte a string
	return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}


var operador = document.getElementsByClassName("Operador");//Obtengo el operador 

for(var i =0;i<operador.length;i++){
	operador[i].addEventListener('click',function(){
		if(this.id=="clear"){
			imprimirHistorial("");
			imprimirSalida("");
		}
		else if(this.id=="CE"){
			var output=reverseNumberFormat(obtenerSalida()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				imprimirSalida(output);
			}
		}
		else{
			var output=obtenerSalida();
			var history=obtenerHistorialCalculo();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					imprimirSalida(result);
					imprimirHistorial("");
				}
				else{
					history=history+this.id;
					imprimirHistorial(history);
					imprimirSalida("");
				}
			}
		}
		
	});

}

var numero = document.getElementsByClassName("Numero");
for(var i =0;i<numero.length;i++){
	numero[i].addEventListener('click',function(){
		var output=reverseNumberFormat(obtenerSalida());
		if(output!=NaN){ //si la salida es un numero
			output=output+this.id;
			imprimirSalida(output);
		}
	});
}


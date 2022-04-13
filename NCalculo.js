var pantallaHistorial = document.getElementById("valorHistorial");
var resultado = document.getElementById("valorSalida");
var buttons = document.getElementById("tecla");

var operacionCompleta = false;


var ultimoValor = function ultimoValor() {
  return Salida.textContent.substring(Salida.textContent.length - 1);
};

//Funcion que escribe los números y operadores
var escribirOperacion = function escribirOperacion(text) {
  if (pantallaHistorial.textContent == "0" && text != ".") // no hace nada
    pantallaHistorial.textContent = "";

    

  if (operacionCompleta && isNaN(text)) {
    pantallaHistorial.textContent = resultado.textContent;
    operacionCompleta = false;
  }

  if (operacionCompleta && !isNaN(text)) { 
    pantallaHistorial.textContent = "";
    resultado.textContent = "0";
    operacionCompleta = false;
  }

  if (isNaN(ultimoValor()) && isNaN(text)) {
    pantallaHistorial.textContent = pantallaHistorial.textContent.substring(
      0,
      pantallaHistorial.textContent.length - 1
    );
  } else if (pantallaHistorial.textContent.length < 24) {
    pantallaHistorial.textContent += text;
    
  }
 // Haciendo responsivo el historial
  if (pantallaHistorial.textContent.length > 20) { 
    //Hace responsivo el P
    pantallaHistorial.style.fontSize = "25px";
    pantallaHistorial.style.marginTop = "15px";
  }
};

var escribirResultado = function escribirResultado() {
  if (isNaN(ultimoValor()) && ultimoValor() !== ")")
    pantallaHistorial.textContent = pantallaHistorial.textContent.substring(
      0,
      pantallaHistorial.textContent.length - 1
    );

  resultado.textContent = eval(pantallaHistorial.textContent);
  operacionCompleta = true;

  if (resultado.textContent.length > 9) {
    //Hace responsivo el P
    resultado.style.fontSize = "2em";
    resultado.style.marginTop = "1em";
  }
};




var limpiarPantalla = function limpiarPantalla() {
  pantallaHistorial.textContent = "0";
  resultado.textContent = "0";
  resultado.style.fontSize = "70px";
  
  pantallaHistorial.style.fontSize = "40px";
};

buttons.addEventListener("click", function (e) {
  if (e.target.textContent !== "") {
    switch (e.target.textContent) {
      case "=":
        escribirResultado();
        break;
      case 'C':
        limpiarPantalla();
        break;

      case "CE":
        limpiarPantalla();
        break;
     
      case ",":
        

        
        escribirOperacion(".");
        
        break;

      default:
        escribirOperacion(e.target.textContent);
        break;
    }
  }
});

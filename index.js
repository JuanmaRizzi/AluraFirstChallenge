function getValueInput() {
  //let inputValue1 = document.querySelector("#domTextElement1").value;
  let inputValue2 = document
    .querySelector(".container-ingrese-texto")
    .value.toLowerCase();
  let texto = inputValue2.replace(/e/gim, "enter");
  texto = texto.replace(/i/gim, "imes");
  texto = texto.replace(/a/gim, "ai");

  texto = texto.replace(/o/gim, "ober");
  texto = texto.replace(/u/gim, "ufat");

  document.getElementById("container-texto-encriptado").style.backgroundImage = "none";

  document.getElementById("preaviso").style.display = "none";
  document.getElementById("texto-cifrado").style.display = "none";

  document.getElementById("texto-encriptado").style.display = "show";
  document.getElementById("texto-encriptado").style.display = "inherit";

  document.querySelector("#texto-encriptado").innerHTML = texto;

  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";

  //document.getElementById("container-texto-a-mostrar").style.display = "show";
  
  //document.getElementById("container-texto-a-mostrar").style.display = "inherit";
}

function desencriptar() {
  let inputValue1 = document.querySelector("#container-ingrese-texto").value;

  let texto = inputValue1.replace(/enter/gim, "e");
  texto = texto.replace(/imes/gim, "i");
  texto = texto.replace(/ai/gim, "a");

  texto = texto.replace(/ober/gim, "o");
  texto = texto.replace(/ufat/gim, "u");

  document.getElementById("preaviso").style.display = "none";
  document.getElementById("texto-cifrado").style.display = "none";

  document.getElementById("texto-encriptado").style.display = "show";
  document.getElementById("texto-encriptado").style.display = "inherit";

  document.querySelector("#texto-encriptado").innerHTML = texto;
}
function copiar() {
  // Crea un campo de texto "oculto", este por un textarea

  var aux = document.createElement("textarea");

  // Asigna el contenido del elemento especificado al valor del campo
  // este para vaciar el contenido

  aux.innerHTML = document.querySelector("#texto-encriptado").innerHTML;

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);

  document.getElementById("container-ingrese-texto").value = "";
}

// getValueInput()
//  desencriptar()
//console.log(test)

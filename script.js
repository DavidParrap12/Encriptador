function validarTexto(texto) {

    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";

    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true;
    }else if(texto==vacio){
        alert("Ingrese un mensaje para encriptar");
        return true;
    }else {
        return false;
    }
}
    

let btnencriptar = document.querySelector("#btn-encriptar");

btnencriptar.addEventListener("click", function () {
    let cajatexto = document.querySelector("#cajatexto").value;
    let textoIngresado = cajatexto;

    if(validarTexto (textoIngresado) == false) {
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    }else {
        cajatexto = "";
    }
});

const reglas = {"e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
let imagen = document.querySelector("imagen2");
let contenedor = document.querySelector("mensaje-encriptado");
let contenedorResultado = document.querySelector("msg");

function encriptar (textoIngresado) {
    document.getElementById("imagen2").style.display = "none";
    document.getElementById("mensaje-encriptado").style.display = "none";
    document.getElementById("msg").style.display = "block";
    document.getElementById("btn-copy").style.display = "block";

    let Encriptado = textoIngresado;
    for (const obj in reglas) {
        Encriptado = Encriptado.replaceAll(obj,reglas[obj]);
    }
    return (Encriptado);
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click", function() {
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#cajatexto").value;
});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function (){
    let textoIngresado = document.querySelector("#cajatexto").value;
    let Desencriptado = desencriptar(textoIngresado);
    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
});


function desencriptar(textoIngresado) {
    document.getElementById("imagen2").style.display = "none";
    document.getElementById("mensaje-encriptado").style.display = "none";
    document.getElementById("msg").style.display = "block";
    document.getElementById("btn-copy").style.display = "block";


    let desencriptado = textoIngresado;
    for (const obj in reglas) {
        desencriptado = desencriptado.split(reglas[obj]).join(obj);
    }
    return desencriptado;
}

function asignarContenido(elementoSelector, contenido) {
    let elementoHTML = document.querySelector(elementoSelector);
    elementoHTML.innerHTML = contenido;
}
  
function realizarTransformacion(accion) {
    let texto = document.getElementById("cajatexto").value.toLowerCase();

    if (texto === "") {
    alert("Por favor, ingresa un mensaje para " + accion);
    return;
    }

    if (accion === "encriptar") {
      // Proceso de encriptación
    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');
    } else if (accion === "desencriptar") {
      // Proceso de desencriptación
    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');
    }

    asignarContenido('#titulo-mensaje', '');
    asignarContenido('#parrafo', texto);

    document.getElementById('imagen2').remove(); 
}

const copiarContenido = async () => {
    let texto = document.getElementById('parrafo').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        alert('No se pudo copiar el texto al portapapeles');

    }
}

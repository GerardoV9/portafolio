function encriptar() {
    let inputText = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");


    let encryptedText = inputText
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (inputText.length != 0) {
        document.getElementById("texto").value = encryptedText;
        tituloMensaje.textContent = "El texto fue encriptado exitosamente";
        parrafo.textContent = "";
        imagen.src = "./imag/encriptar.png";
    } else {
        imagen.src = "./imag/muñeco.png";
        tituloMensaje.textContent = "No hay mensaje encriptado";
        parrafo.textContent = "Ingrese el texto a encriptar o desencriptar";
        swal("Ooops!", "No se ingreso ningun texto", "warning");
    }
}

function desencriptar() {
    let inputText = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");


    let encryptedText = inputText
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (inputText.length != 0) {
        document.getElementById("texto").value = encryptedText;
        tituloMensaje.textContent = "El texto fue desencriptado exitosamente";
        parrafo.textContent = "";
        imagen.src = "./imag/desencriptar.jpg";
    } else {
        imagen.src = "./imag/muñeco.png";
        tituloMensaje.textContent = "No hay mensaje encriptado";
        parrafo.textContent = "Ingrese el texto a encriptar o desencriptar";
        swal("Ooops!", "No se ingreso ningun texto", "warning");
    }
}
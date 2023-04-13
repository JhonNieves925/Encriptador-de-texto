// Función para encriptar el texto
function encryptText(text, key) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { 
            encryptedText += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { 
            encryptedText += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else { 
            encryptedText += text.charAt(i);
        }
    }
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text, key) {
    return encryptText(text, 26 - key);
}

// Función para encriptar el texto introducido por el usuario
function encriptarTexto() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var textoEncriptado = encryptText(texto, 3);
    resultado.value = textoEncriptado;
}

// Función para desencriptar el texto introducido por el usuario
function desencriptarTexto() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var textoDesencriptado = decryptText(texto, 3);
    resultado.value = textoDesencriptado;
}

// Función para desencriptar el texto del portapapeles
function desencriptarTextoCopiado() {
    navigator.clipboard.readText().then(function(clipboardText) {
        var resultado = document.getElementById("resultado");
        var textoDesencriptado = decryptText(clipboardText, 3);
        resultado.value = textoDesencriptado;
    });
}



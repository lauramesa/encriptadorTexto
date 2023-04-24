function descifrar(){
    var texto = document.querySelector('.incoming__text').value;

    if(validarTexto(texto) == true){
        return mostrarMensaje("No has ingresado ningun texto!");
    }else if(validarCaracteresEspeciales(texto) == true){
        return mostrarMensaje("No se permiten caracteres especiales tales como las tildes");
    }else if(validarMayusculas(texto) == true){
        return mostrarMensaje("No se permiten letras en mayuscula");
    }
    else{
        desencriptar(texto);
    }
}

function validarTexto(textoEntrada){
    let hayTexto = textoEntrada;
    if(hayTexto.trim() === ""){
        return true;
    } else{
        return false;
    }
}

function validarCaracteresEspeciales(textoEntrada){
    let text  = textoEntrada;
    let caracteres = /[áíúéóäïüëöàìùèòñ]/g;
    let hayCaracter = text.match(caracteres);
    if(hayCaracter){
        return true;
    }else{
        return false;
    }
}

function validarMayusculas(textoEntrada){
    let hayMayusculas = textoEntrada;
    if(hayMayusculas != hayMayusculas.toLowerCase()){
        return true;
    }
}

function desencriptar(textoEntrada){
    var entrada = textoEntrada;
    var reemplazo = entrada.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    return mostrarMensaje(reemplazo);
}

function mostrarMensaje(mensaje){
    let resultado = document.querySelector('.textResult');
    var x = mensaje;
    return resultado.textContent = x;
}
document.querySelector("#registro").addEventListener("mouseover", mostrarGifR);
document.querySelector("#registro").addEventListener("mouseout", ocultarGifR);
document.querySelector("#login").addEventListener("mouseover", mostrarGifL);
document.querySelector("#login").addEventListener("mouseout", ocultarGifL);
document.querySelector("#inicio").addEventListener("mouseover", mostrarGifI);
document.querySelector("#inicio").addEventListener("mouseout", ocultarGifI);

var gifRegistro = document.querySelector("#gif-registro");
var gifLogin = document.querySelector("#gif-login");
var gifInicio = document.querySelector("#gif-inicio");

function mostrarGifR() {
    gifRegistro.style.display = "block";
}

function ocultarGifR() { 
    gifRegistro.style.display = "none";
}

function mostrarGifL() {
    gifLogin.style.display = "block";
}

function ocultarGifL() { 
    gifLogin.style.display = "none";
}

function mostrarGifI() {
    gifInicio.style.display = "block";
}

function ocultarGifI() { 
    gifInicio.style.display = "none";
}
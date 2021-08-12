
document.getElementById("validar").addEventListener('click', validar);

function validar() {
var correo = document.getElementById("correo").value;
var contraseña = document.getElementById("contraseña").value;


var medico_correo = "denisaBregoli@gmail.com";

if (correo != medico_correo || contraseña != 123) {
    document.getElementById("confirmacion").innerHTML = "Datos ingresados erróneamente";
}
if (correo === medico_correo && contraseña == 123) {
    window.open("turnos_medico.html");
  
    }
}
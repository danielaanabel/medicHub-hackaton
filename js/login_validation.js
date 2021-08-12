
document.getElementById("validar").addEventListener('click', validar);

function validar() {
var correo = document.getElementById("correo").value;
var contraseña = document.getElementById("contraseña").value;


var medico_correo = "denisaBregoli@gmail.com";

if (correo != paciente_correo || correo != medico_correo || contraseña != 123) {
    document.getElementById("confirmacion").innerHTML = "Datos ingresados erróneamente";
}
if (correo === paciente_correo && contraseña == 123) {
    window.location.href = "cuenta_paciente.html";
}
if (correo === medico_correo && contraseña == 123) {
     window.location.href = "turnos_medico.html";
    }
} 
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var intereses = document.querySelectorAll('input[name="intereses[]"]:checked');

    if (nombre === "" || telefono === "" || correo === "" || intereses.length === 0) {
        alert("Por favor, complete todos los campos obligatorios y seleccione al menos un interés.");
        return false;
    }

    return true;
}

document.querySelector("form").addEventListener("submit", function (event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});

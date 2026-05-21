let fechaInput = document.getElementById("fecha");
let fechaEnTexto = document.getElementById("Fecha");
let nombreInput = document.getElementById("nombre");
let nombreEnTexto = document.getElementById("persona");
fechaInput.addEventListener("change", cambiaFechaEnTexto);
nombreInput.addEventListener("input",cambiaNombreEnTexto);

function cambiaFechaEnTexto()
{
	fechaEnTexto.textContent = fechaInput.value;
}

function cambiaNombreEnTexto()
{
	nombreEnTexto.textContent = nombreInput.value;
}
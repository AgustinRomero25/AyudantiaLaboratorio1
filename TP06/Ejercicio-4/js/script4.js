montoAPagarTexto = document.getElementById("valores");
botonCalcular = document.querySelector('input[type="submit"]');
botonCalcular.addEventListener("click", calcularMonto);


function calcularMonto(evento)
{
	evento.preventDefault();
	let precio = document.getElementById("precio");
	let cuotas = document.getElementById("cuota");
	let monto = Number(precio.value) * Number(cuotas.value) * 1.21;
	montoAPagarTexto.innerHTML = 'Monto a pagar (IVA incluído): $' + monto.toFixed(2);
}
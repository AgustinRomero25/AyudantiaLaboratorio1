const VALOR_IVA = 21;

let montoAPagarTexto = document.getElementById('valores');
let form = document.getElementById('form');
form.addEventListener('submit', calcularMonto);


function calcularMonto(evento)
{
	evento.preventDefault();
	let precio = document.getElementById('precio');
	let cuotas = document.getElementById('cuota');
	let monto = parseFloat(precio.value) * parseFloat(cuotas.value) + parseFloat(precio.value) * parseFloat(cuotas.value) * VALOR_IVA/100;
	montoAPagarTexto.innerHTML = 'Monto a pagar (IVA incluído): $' + monto.toFixed(2);
}
const KMXLITRO = 14;
let capacidadTanque = 50;
const viajes = document.getElementById('viajes');
const total = document.getElementById('total');

let contadorViajes = 1;
let puedeViajar = true;

while (capacidadTanque > 5 && puedeViajar) 
{
	let kmMaximos = KMXLITRO * capacidadTanque;
	let kmsHechos = parseFloat(prompt ('ingrese los kilómetros realizados en este viaje:'))
	if (isNaN(kmsHechos) || kmsHechos < 0) 
	{
		alert('El dato ingresado es inválido.')
		puedeViajar = false;
	} else if (kmsHechos > kmMaximos)
	{
		alert('No tenés suficiente nafta para recorrer esa distancia. Máximo permitido: ' + kmMaximos.toFixed(0) + 'km.');
	} else
	{
		let litrosRestantes = capacidadTanque - (kmsHechos/KMXLITRO);
		
		viajes.innerHTML += '<p>Viaje ' + contadorViajes + ': ' + kmsHechos + 'km' + ' - ' + (kmsHechos / KMXLITRO).toFixed(2) + 'lts consumidos' + ' - ' + litrosRestantes.toFixed(2) + 'lts restantes</p>';
		
		capacidadTanque = litrosRestantes;
		contadorViajes++;
		
		if (litrosRestantes <= 0)
		{
			window.alert('Te quedaste sin nafta, no podés realizar más viajes.');
			puedeViajar = false;
		} else if (litrosRestantes <= 5)
		{
			window.alert('El tanque entró en reserva. Recargá en la estación de servicio más cercana.');
			puedeViajar = false;
		}
		let viajesTotales = contadorViajes;
	}

}
total.innerHTML = 'Total viajes: ' + (contadorViajes - 1);
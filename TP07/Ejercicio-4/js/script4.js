const form = document.querySelector('form');
const monto = document.getElementById('monto');
form.addEventListener('submit', mostrarPrecio);


function mostrarPrecio(evento)
{
	evento.preventDefault();
	const juegos = document.getElementsByClassName('juegos');
	
	let total = 0;
	
	for(let i = 0; i < juegos.length; i++)
	{
		if(juegos[i].checked)
		{
			total += parseFloat(juegos[i].value);
		}
	}
	monto.innerHTML = '$' + total.toFixed(2);
}
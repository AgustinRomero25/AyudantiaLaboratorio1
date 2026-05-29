document.addEventListener('DOMContentLoaded', function()
{	
	let llegoElDato = true;
	while(llegoElDato == true)
	{
		fetch('https://rae-api.com/api/random')
		.then((respuesta) => 
		{		
			return respuesta.json();
		})
		.then((datos) =>
		{
			let palabraSecreta = datos.data.word;
			let cantidadLetras = palabraSecreta.length;
			let intentos = 0;
			let juegoTerminado = false;
			let progreso = [];
			
			for (let i = 0; i < cantidadLetras; i++)
			{
				progreso[i] = '_';
			}
			
			alert('¡Bienvenido al juego! La palabra secreta tiene ' + cantidadLetras + ' letras: ' + armarTextoProgreso(progreso));

			while (juegoTerminado == false) 
			{
				let textoActual = armarTextoProgreso(progreso);
				let letraIngresada = prompt('Palabra actual: ' + textoActual + '\nIngrese una letra:');

				if (letraIngresada == '') 
				{
					alert('Por favor, ingrese una letra válida.');
				} else
				{
					let letra = letraIngresada;
					intentos++; 

					for (let i = 0; i < cantidadLetras; i++)
					{
						if (palabraSecreta[i] == letra)
						{
							progreso[i] = letra; 
						}
					}

					let yaAdivino = true;
					
					for (let i = 0; i < cantidadLetras; i++)
					{
						if (progreso[i] == '_')
						{
							yaAdivino = false; 
						}
					}

					if (yaAdivino == true)
					{
						juegoTerminado = true; 
					}
				}
			}
        alert('¡Felicitaciones! Adivinaste la palabra: ' + palabraSecreta + '\nCantidad de intentos realizados: ' + intentos);
		})
		.catch((error) =>
		{
			console.error('Error al guardar el dato.');
			llegoElDato = false;
			alert('Hubo un problema al conectar con el servidor de palabras.');
		})
	}
});
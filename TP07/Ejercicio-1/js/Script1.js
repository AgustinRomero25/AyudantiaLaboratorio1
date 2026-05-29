const ojo = document.getElementById('ojo');
const password = document.getElementById('pass');
ojo.addEventListener('mousedown', mostrarOcultarContrasenia);
ojo.addEventListener('mouseup', mostrarOcultarContrasenia);
ojo.addEventListener('mouseout', mostrarOcultarContrasenia);// sin esto, selecciono el ojo e intento moverlo afuera y no toma el mouseup.

function mostrarOcultarContrasenia(tipoEvento)
{
	switch (tipoEvento.type)
	{
		case 'mousedown':
			password.type = 'text';
			ojo.src = 'img/openeye.png';
		break;
		
		case 'mouseout':
			password.type = 'password';
			ojo.src = 'img/closeeye.png';
		break;
		
		case 'mouseup':
			password.type = 'password';
			ojo.src = 'img/closeeye.png';
		break;
	}
}
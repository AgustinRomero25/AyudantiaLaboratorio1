const titulo = document.getElementById('titulo');
const lista = document.getElementById('lbl-lista');
const idiomaElegido = document.getElementById('lista');
const opciones = idiomaElegido.querySelectorAll('option');
const usu = document.getElementById('lbl-usuario');
const pass = document.getElementById('lbl-pass');
const pass2 = document.getElementById('lbl-pass2');
const acepto = document.getElementById('lbl-acepto');
const enviar = document.getElementById('boton');
idiomaElegido.addEventListener('change', traducir);

function traducir ()
{
	switch(idiomaElegido.value)
	{
		case 'es':
			titulo.innerHTML = 'Registro';
			lista.innerHTML = 'Idioma';
			opciones[0].innerHTML = 'Español';
			opciones[1].innerHTML = 'Inglés';
			opciones[2].innerHTML = 'Portugués';
			usu.innerHTML = 'Usuario';
			pass.innerHTML = 'Contraseña';
			pass2.innerHTML = 'Repetir Contraseña';
			acepto.innerHTML = 'Acepto los términos y condiciones.';
			enviar.value = 'Enviar';
		break;
		
		case 'en':
			titulo.innerHTML = 'Register';
			lista.innerHTML = 'Language';
			opciones[0].innerHTML = 'Spanish';
			opciones[1].innerHTML = 'English';
			opciones[2].innerHTML = 'Portuguese';
			usu.innerHTML = 'User';
			pass.innerHTML = 'Password';
			pass2.innerHTML = 'Repeat Password';
			acepto.innerHTML = 'I accept terms and conditions.';
			enviar.value = 'Send';
		break;
		
		case 'por':
			titulo.innerHTML = 'Cadastro';
			lista.innerHTML = 'Idioma';
			opciones[0].innerHTML = 'Espanhol';
			opciones[1].innerHTML = 'Inglês';
			opciones[2].innerHTML = 'Português';
			usu.innerHTML = 'Usuário';
			pass.innerHTML = 'Senha';
			pass2.innerHTML = 'Repetir Senha';
			acepto.innerHTML = 'Aceito os termos e condições.';
			enviar.value = 'Enviar';
		break;
	}
}

const form = document.getElementById('form');
const passInput = document.getElementById('pass');
const pass2Input = document.getElementById('pass2');
const aceptoInput = document.getElementById('acepto');

form.addEventListener('submit', validarFormulario);
form.addEventListener('focus', validarFormulario);

function validarFormulario (evento) 
{
    evento.preventDefault();
	if (passInput.value !== pass2Input.value || passInput.value === '') 
	{
        alert('Las contraseñas no coinciden o están vacías.');
		passInput.style.boxShadow = '0 0 8px red';
		pass2Input.style.boxShadow = '0 0 8px red';
	} else
	{
		if(!aceptoInput.checked)
		{
			alert('Debe aceptar los términos y condiciones.');
			aceptoInput.style.boxShadow = '0 0 8px red';
		} else
		{
			alert('Registro exitoso!');
			passInput.style.boxShadow = '0 0 8px green';
			pass2Input.style.boxShadow = '0 0 8px green';
			aceptoInput.style.boxShadow = '0 0 8px green';
		}
	}
}
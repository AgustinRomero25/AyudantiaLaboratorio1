/* Ejercicio 1.a */
/* El color de letra de la página debe cambiar cuando se seleccione un color 
en el input color. Para ello cree una función de nombre cambiarColorLetra() donde 
acceda al elemento mediante el id y realice los cambios, además, utilice un listener 
que llame a dicha función. Comente el código justificando el evento elegido.*/

document.getElementById('color').addEventListener('input', cambiarColorLetra); // Se utiliza el evento input porque permite que el cambio sea inmediato a diferencia de change.

function cambiarColorLetra()
{
	let texto = document.getElementById('texto');
	let colorSeleccionado = document.getElementById('color').value;
	texto.style.color = colorSeleccionado;
	console.log('Se ha cambiado el color de las letras a ' + colorSeleccionado + '.');
}



/********************************************/

/* Ejercicio 1.b */
/* b.	Modifique el estilo del segundo input cuando reciba y pierda el foco. 
Para este ejercicio acceda al elemento mediante un selector CSS (input[type="number"]), 
y nombre a las funciones de la siguiente manera: obtieneFoco() y pierdeFoco(). 
Los cambios de estilos serán los siguientes:
    I.	Cuando reciba el foco, cambiar el CSS para ponerle sombra: '0 0 8px cyan'
    II.	Cuando pierda el foco, quitarle la sombra:  '0 0 0'
 */

let inputCbu = document.querySelector('input[type="number"]');
inputCbu.addEventListener('focus', obtieneFoco);
inputCbu.addEventListener('blur', pierdeFoco);

function obtieneFoco()
{
	inputCbu.style.boxShadow = '0 0 8px cyan';
	console.log('Se activó el foco en el segundo input.');
}

function pierdeFoco()
{
	inputCbu.style.boxShadow = '0 0 0';
	console.log('Se perdió el foco en el segundo input.');
}



/*******************************************/

/* Ejercicio 1.c */
/* c.	Cuente la cantidad de caracteres del segundo input a medida que se vaya 
escribiendo. Utilice el acceso del punto anterior para el input y muestre la cantidad
de caracteres en el párrafo inferior, utilizando una función de nombre cuentaCaracteres().
*/

inputCbu.addEventListener('input', cuentaDeCaracteres);

function cuentaDeCaracteres()
{
	let cant = inputCbu.value.length;
	document.getElementById('mensaje').innerHTML = cant + ' caracteres.';
}


/*******************************************/

/* Ejercicio 1.d */
/* d.	Implemente el modo oscuro y modo claro con las imágenes del sol y luna que se 
muestran en la página. Note que la imagen del sol está oculta mediante CSS. Con JavaScript 
programe que, al hacer clic en la imagen de la luna, el color de fondo de la página cambie 
a negro, las letras a color blanco y se muestre la imagen del sol. Realice lo opuesto con 
la imagen del sol para volver a como estaba la página normalmente.
*/

document.getElementById('luna').addEventListener('click',modoOscuro);
document.getElementById('sol').addEventListener('click',modoClaro);

function modoOscuro () {
	document.body.style.backgroundColor = '#000000';
	document.body.style.color = '#FFFFFF';
	sol.style.display = 'block';
	luna.style.display = 'none';
	
	console.log('Se ha cambiado la página a Modo Oscuro');
}

function modoClaro () {
	document.body.style.backgroundColor = '#FFFFFF';
	document.body.style.color = '#000000';
	sol.style.display = 'none';
	luna.style.display = 'block';
	
	console.log('Se ha cambiado la página a Modo Claro');
}


// Función Sumar
const suma = document.getElementById('suma'); 

suma.addEventListener('click', sumar);
const resultado = document.querySelector('#resultado');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

function sumar() {
    const result = Number(num1.value) + Number(num2.value);
    window.alert(result);
	resultado.innerHTML = 'Resultado: ' + result;
}

// Función Restar
const boton = document.getElementById('resta');
boton.addEventListener('click', resta);


function resta() {
	result = Number(num1.value) - Number(num2.value);
	resultado.innerHTML = 'Resultado: ' + result;
}
// Función Multiplicar

const botonMultiplicar = document.querySelector('#multiplicar');
botonMultiplicar.addEventListener('click', multiplicar);

function multiplicar() {
	result = Number(num1.value) * Number(num2.value);
	resultado.innerHTML = 'Resultado: ' + result;
}

// Función Dividir

const botonDividir = document.querySelector('#dividir');
botonDividir.addEventListener('click', dividir);

function dividir() {
	if(num2.value != 0)
	{
		result = Number(num1.value) / Number(num2.value);
		resultado.innerHTML = 'Resultado: ' + result;
	} else 
	{
		resultado.innerHTML = 'No se puede dividir en 0.';
	}
}
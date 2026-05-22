// Función Sumar
const suma = document.getElementById('suma'); 

suma.addEventListener('click', sumar);
const resultado = document.getElementById('resultado');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
let result;

function sumar() {
    result = parseFloat(num1.value) + parseFloat(num2.value);
	resultado.innerHTML = 'Resultado: ' + result;
}

// Función Restar
const boton = document.getElementById('resta');
boton.addEventListener('click', resta);


function resta() {
	result = parseFloat(num1.value) - parseFloat(num2.value);
	resultado.innerHTML = 'Resultado: ' + result;
}
// Función Multiplicar

const botonMultiplicar = document.getElementById('multiplicar');
botonMultiplicar.addEventListener('click', multiplicar);

function multiplicar() {
	result = parseFloat(num1.value) * parseFloat(num2.value);
	resultado.innerHTML = 'Resultado: ' + result;
}

// Función Dividir

const botonDividir = document.getElementById('dividir');
botonDividir.addEventListener('click', dividir);

function dividir() {
		result = parseFloat(num1.value) / parseFloat(num2.value);
		resultado.innerHTML = 'Resultado: ' + result;
	}
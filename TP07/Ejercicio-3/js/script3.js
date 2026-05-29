ARREGLO = ["Hacer la cama", "Lavar los platos", "Limpiar el baño", "Sacar la basura", "Cocinar", "Hacer las compras", "Lavar la ropa", "Regar las plantas"];

const listado = document.getElementById('listado');

for(let i = 0; i < ARREGLO.length; i++)
{
	listado.innerHTML += '<section style="display: flex; flex-direction: row;"><input type="checkbox"><label>' + ARREGLO[i] + '</label></section>'
}
const juegos = document.querySelectorAll('.juegos');
const monto = document.getElementById('monto');

let total = 0;

for (let i = 0; i < juegos.length; i++) 
{
    juegos[i].addEventListener('click', function() 
	{
        if (juegos[i].checked) 
        {
            total += parseFloat(juegos[i].value);
        } 
        else 
        {
            total -= parseFloat(juegos[i].value);
        }
        monto.innerHTML = '$' + total.toFixed(2);
    });
}
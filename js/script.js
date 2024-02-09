let procesoFactorial = () =>
{
    let numeroFactorial = 1;
    let numeroI = Number.parseInt(document.getElementById("numero").value);
    if(isNaN(numeroI))
    {
        alert('El valor ingresado no es un número!');
    }
    else
    {
        for (let x = 1; x <= numeroI; x++) 
        {
            numeroFactorial *= x;
        }
    }

    let resultadoFinal = document.getElementById('resultado');
    resultadoFinal.textContent = `El factorial del número ${numeroI} es: ${numeroFactorial}`;
}
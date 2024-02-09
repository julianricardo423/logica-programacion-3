let procesoFactorial = () =>
{
    let numeroFactorial = 1;
    let numeroI = Number.parseInt(document.getElementById("numero").value);
    let resultadoFinal = document.getElementById('resultado');
    if(isNaN(numeroI))
    {
        alert('El valor ingresado no es un número!');
        resultadoFinal.textContent = "";
    }
    else
    {
        for (let x = 1; x <= numeroI; x++) 
        {
            numeroFactorial *= x;
        }
        resultadoFinal.textContent = `El factorial del número ${numeroI} es: ${numeroFactorial}`;
    }
}
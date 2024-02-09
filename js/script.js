let procesoFactorial = () =>
{
    let numeroFactorial = 1;
    //Conversión a número
    let numeroI = Number.parseInt(document.getElementById("numero").value);

    //Variable para escribir el resultado final
    let resultadoFinal = document.getElementById('resultado');
    //Se valida si el texto ingresado es un texto
    if(isNaN(numeroI))
    {
        alert('El valor ingresado no es un número!');
        resultadoFinal.textContent = "";
    }
    else
    {
        //Recorrer hasta el número ingresado
        for (let x = 1; x <= numeroI; x++) 
        {
            numeroFactorial *= x;
        }
        //Resultado que se enviara en el div
        resultadoFinal.textContent = `El factorial del número ${numeroI} es: ${numeroFactorial}`;
    }
}
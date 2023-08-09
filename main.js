//este proyecto es un simulador de prestamos
//aca se ingresan los datos por prompt
let cliente = prompt("ingrese su nombre por favor")
let ingreso = prompt(`Hola ${cliente}, para ingresar a la calculadora de prestamos presione enter, para salir presione S` )
if(ingreso==""){
    
let monto = parseInt(prompt("ingrese el monto al que quiere acceder"));
let cuotas = parseInt(prompt("ingrese la cantidad de cuotas: \n 3: 3 pagos con 5% de recargo. \n 6: 6 pagos con 10% de recargo. \n 12: 12 pagos con 20% de recargo"));


//aca validamos que la cantidad de cuotas sea una de las 3 opciones indicadas
    if(cuotas===3){
        let resultado = (monto+monto*0.05)/3;
        alert(`estimado ${cliente} su prestamo de $${monto} debera ser abonado en ${cuotas} pagos de ${resultado}`)

    }else if(cuotas ===6){
        let resultado = (monto+monto*0.1)/6;
        alert(`estimado ${cliente} su prestamo de $${monto} debera ser abonado en ${cuotas} pagos de ${resultado}`)
    }else if (cuotas ===12){
        let resultado = (monto+monto*0.2)/12;
        alert(`estimado ${cliente} su prestamo de $${monto} debera ser abonado en ${cuotas} pagos de ${resultado}`)
    }

    else{
        alert("los valores de cuota solo pueden ser 3, 6 o 12");
    }

}else{
    alert("hasta luego!")
}


//simulador de creditos
//pedimos que ingrese al sistema
let intro = prompt(
  "Bienvenido!\n presione ENTER para acceder a un prestamo.\n presione 'S' para salir."
);
//bucle que valida la entrada
while (intro == "") {
  //ingreso de monto y cuotas
  let monto = parseInt(prompt("ingrese el monto al que desea acceder"));
  let cuotas = parseInt(
    prompt(
      "ingrese el numero de cuotas\n hasta 3 pagos %30 de interes. \n hasta 6 pagos %50 de interes. \n hasta 12 pagos %80 de interes.\n mas de 12 pagos %100 de interes."
    )
  );
  //funcion para dividir el monto en las cuotas
  function calcular(monto, cuotas) {
    return monto / cuotas;
  }
  //condicional que verifica el numero de cuotas y agrega los porcentajes de intereses dando el resultado
  if (cuotas <= 3) {
    let montoInteres = monto + monto * 0.3;
    let montoFinal = calcular(montoInteres, cuotas);
    alert(
      `Su prestamo de $${monto} fue aprobado y debera abonar ${cuotas} pagos de $${montoFinal.toFixed(
        2
      )}`
    );
  } else if (cuotas > 3 && cuotas <= 6) {
    let montoInteres = monto + monto * 0.5;
    let montoFinal = calcular(montoInteres, cuotas);
    alert(
      `Su prestamo de $${monto} fue aprobado y debera abonar ${cuotas} pagos de $${montoFinal.toFixed(
        2
      )}`
    );
  } else if (cuotas > 6 && cuotas <= 12) {
    let montoInteres = monto + monto * 0.8;
    let montoFinal = calcular(montoInteres, cuotas);
    alert(
      `Su prestamo de $${monto} fue aprobado y debera abonar ${cuotas} pagos de $${montoFinal.toFixed(
        2
      )}`
    );
  } else if (cuotas > 12) {
    let montoInteres = monto + monto;
    let montoFinal = calcular(montoInteres, cuotas);
    alert(
      `Su prestamo de $${monto} fue aprobado y debera abonar ${cuotas} pagos de $${montoFinal.toFixed(
        2
      )}`
    );
  } else {
    alert("debe ingresar un numero de cuotas valido para continuar");
  }
  //finalizador o continuacion del bucle
  intro = prompt(
    "Desea calcular un nuevo prestamo?\n presione ENTER para acceder a un prestamo.\n presione 'S' para salir."
  );
}

/*
  pedir monto
  pedir cuotas
  sumar porcentaje de intereses
  calcular cuotas
  devolver mensaje con cuotas y monto
  */

// bucles - Tabla de multiplicar
// Se usa un bucle for para generar la tabla de multiplicar.
// Se valida que el numero sea positivo

function tablaMultiplicar(numero) {
    if (typeof numero !== "number" || numero <= 0) {
      console.log("error: ingresa un numero positivo");
      return;
    }
  
    console.log(`Tabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  // ejemplos
  tablaMultiplicar(5);
  tablaMultiplicar(8);
  
// sistema de calificaciones
// se valida la entrada para evitar errores
// se asigna letra y estado según rangos de puntuacion

function calcularCalificacion(puntuacion) {
    // Validar entrada
    if (typeof puntuacion !== "number" || puntuacion < 0 || puntuacion > 100) {
      console.log("error: puntuacion debe ser 0-100");
      return;
    }
  
    let letra;
    let estado;
  
    // asignar letra segun puntuacion
    if (puntuacion >= 90) letra = "A";
    else if (puntuacion >= 80) letra = "B";
    else if (puntuacion >= 70) letra = "C";
    else if (puntuacion >= 60) letra = "D";
    else letra = "F";
  
    // determinar aprobado/reprobado
    estado = puntuacion >= 60 ? "aprobado" : "reprobado";
  
    console.log(`puntuacion: ${puntuacion}`);
    console.log(`calificacion: ${letra}`);
    console.log(`estado: ${estado}`);
  }
  
  // ejemplos
  calcularCalificacion(95);
  calcularCalificacion(72);
  calcularCalificacion(50);
  
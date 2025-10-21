// funciones para calcular áreas
// se crean funciones separadas por figura para mantener el código organizado.
// los parámetros permiten calcular áreas con distintos valores
// se muestra cómo reutilizar código

function arearectangulo(base, altura) {
    return base * altura; // calcula area del rectangulo
  }
  
  function areacirculo(radio) {
    return Math.PI * radio * radio; // calcula area del circulo
  }
  
  function areatriangulo(base, altura) {
    return (base * altura) / 2; // calcula area del triangulo
  }
  
  // Mostrar resultados
  console.log("area rectángulo:", arearectangulo(5, 3));
  console.log("area círculo:", areacirculo(4).toFixed(2));
  console.log("area triángulo:", areatriangulo(6, 4));
  
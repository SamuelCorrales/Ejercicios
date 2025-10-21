// variables y tipos de Datos
// se usan variables para almacenar informacion del estudiante
// se determina el estado academico segun el promedio
// esto permite mostrar un mensaje personalizado
let nombre = "Samuel Corrales";
let edad = 18;
let promedio = 4.2;
let semestre = 3;

console.log("👨‍🎓 información del estudiante:");
console.log("nombre:", nombre);
console.log("edad:", edad);
console.log("promedio:", promedio);
console.log("semestre:", semestre);

// Estado del académico del estudiante según promedio
if (promedio >= 4.0) {
  console.log(`excelente, ${nombre}! su promedio de ${promedio} muestra un gran rendimiento academico`);
} else if (promedio >= 3.0) {
  console.log(`bien hecho, ${nombre}. su promedio de ${promedio} es bueno, pero puede seguir mejorando`);
} else {
  console.log(`lo puede hacer mejor, ${nombre}. su promedio de ${promedio} necesita mejorar`);
}

// operadores y expresiones
// se realizan operaciones básicas y comparación de números
// se maneja division por cero y se calcula promedio

const num1 = 12;
const num2 = 4;

// operaciones básicas
console.log(`${num1} + ${num2} =`, num1 + num2);
console.log(`${num1} - ${num2} =`, num1 - num2);
console.log(`${num1} * ${num2} =`, num1 * num2);

// division con validación
if (num2 !== 0) {
  console.log(`${num1} / ${num2} =`, num1 / num2);
  console.log(`${num1} % ${num2} =`, num1 % num2);
} else {
  console.log("error: division por cero");
}

// promedio
console.log("promedio:", (num1 + num2) / 2);

// comparación
if (num1 > num2) console.log(`${num1} es mayor que ${num2}`);
else if (num1 < num2) console.log(`${num1} es menor que ${num2}`);
else console.log(`${num1} y ${num2} son iguales`);

// operaciones con arrays
// se usan metodos como Math.max, Math.min, reduce y filter
// para obtener resultados de manera eficiente
// se ordena el array para visualizarlo de menor a mayor

const numeros = [5, 8, 2, 10, 3, 7, 4];

// numero mayor
function numeroMayor(arr) {
  return Math.max(...arr); // devuelve el mayor
}

// numero menor
function numeroMenor(arr) {
  return Math.min(...arr); // devuelve el menor
}

// promedio
function promedio(arr) {
  return arr.reduce((acc, num) => acc + num, 0) / arr.length; // suma / cantidad
}

// numeros pares
function numerosPares(arr) {
  return arr.filter(num => num % 2 === 0); // filtra pares
}

// array ordenado
function ordenarArray(arr) {
  return [...arr].sort((a, b) => a - b); // orden ascendente
}

// mostrar resultados
console.log("array original:", numeros);
console.log("mayor:", numeroMayor(numeros));
console.log("menor:", numeroMenor(numeros));
console.log("promedio:", promedio(numeros).toFixed(2));
console.log("pares:", numerosPares(numeros));
console.log("ordenado:", ordenarArray(numeros));

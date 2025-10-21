// manejo de arrays complejos
// se usan reduce para totales por categoria y para encontrar el producto mas vendido

const ventas = [
    { producto: "laptop", categoria: "electronica", cantidad: 10 },
    { producto: "mouse", categoria: "electronica", cantidad: 25 },
    { producto: "cuaderno", categoria: "papeleria", cantidad: 50 },
    { producto: "lapicero", categoria: "papeleria", cantidad: 80 },
    { producto: "silla", categoria: "muebles", cantidad: 15 }
  ];
  
  // totales por categoria
  const totalesPorCategoria = ventas.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.cantidad;
    return acc;
  }, {});
  
  console.log("totales por categoria:", totalesPorCategoria);
  
  // producto mas vendido
  const productoMasVendido = ventas.reduce((max, venta) =>
    venta.cantidad > max.cantidad ? venta : max
  , ventas[0]);
  
  console.log("producto mas vendido:", productoMasVendido);
  
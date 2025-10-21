// programación funcional
// se usa map para agregar propiedad "estado".
// se filtran aprobados con filter y se calcula promedio con reduce.

const estudiantes = [
    { nombre: "ana", promedio: 85 },
    { nombre: "juan", promedio: 92 },
    { nombre: "luis", promedio: 58 },
    { nombre: "maria", promedio: 73 },
    { nombre: "pedro", promedio: 45 }
  ];
  
  // agregar propiedad estado
  const estudiantesConEstado = estudiantes.map(est => ({
    ...est,
    estado: est.promedio >= 60 ? "aprobado" : "reprobado"
  }));
  
  // filtrar aprobados
  const aprobados = estudiantesConEstado.filter(est => est.estado === "aprobado");
  
  // promedio general
  const promedioGeneral = estudiantes.reduce((acc, est) => acc + est.promedio, 0) / estudiantes.length;
  
  // mostrar resultados
  console.log("estudiantes con estado:", estudiantesConEstado);
  console.log("estudiantes aprobados:", aprobados);
  console.log("promedio general:", promedioGeneral.toFixed(2));
  
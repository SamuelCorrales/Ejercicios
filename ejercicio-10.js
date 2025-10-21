// sistema de gestión biblioteca
// se crean clases para modelar Libro, Usuario y Prestamo
// se manejan errores al intentar prestar un libro no disponible
// se usan funciones para buscar libros y generar reportes de forma clara

class Libro {
    constructor(titulo, autor, categoria) {
      this.titulo = titulo;
      this.autor = autor;
      this.categoria = categoria;
      this.disponible = true; // indica si esta disponible
    }
  }
  
  class Usuario {
    constructor(nombre, id) {
      this.nombre = nombre;
      this.id = id;
    }
  }
  
  class Prestamo {
    constructor(usuario, libro) {
      if (!libro.disponible) {
        throw new Error(`el libro "${libro.titulo}" no está disponible`);
      }
      this.usuario = usuario;
      this.libro = libro;
      this.fecha = new Date();
      libro.disponible = false; // marcar libro como prestado
    }
  }
  
  // array de libros
  const libros = [
    new Libro("Cien Años de Soledad", "Gabriel García Márquez", "Novela"),
    new Libro("El Principito", "Antoine de Saint-Exupéry", "Infantil"),
    new Libro("JavaScript: Guía Definitiva", "David Flanagan", "Programación"),
  ];
  
  // array de usuarios
  const usuarios = [
    new Usuario("ana", 1),
    new Usuario("juan", 2)
  ];
  
  // funcion para buscar libros por titulo
  function buscarPorTitulo(titulo) {
    return libros.filter(libro =>
      libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
  }
  
  // funcion para buscar libros por autor
  function buscarPorAutor(autor) {
    return libros.filter(libro =>
      libro.autor.toLowerCase().includes(autor.toLowerCase())
    );
  }
  
  // Funcion para listar libros disponibles
  function reporteDisponibles() {
    return libros.filter(libro => libro.disponible);
  }
  
  // ejemplos de uso
  console.log("buscar libros por 'El':", buscarPorTitulo("El"));
  console.log("buscar libros por autor 'Gabriel':", buscarPorAutor("Gabriel"));
  
  try {
    const prestamo1 = new Prestamo(usuarios[0], libros[0]); 
    console.log("préstamo realizado:", prestamo1);
  } catch (error) {
    console.log("error en préstamo:", error.message);
  }
  
  console.log("libros disponibles despues del préstamo:", reporteDisponibles());
  
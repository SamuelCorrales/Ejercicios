// Objetos y Propiedades
// se usa un objeto para representar un producto
// metodos permiten obtener precio con descuento, disponibilidad e info completa
// mantiene codigo organizado y reutilizable

const Producto = {
    nombre: "Laptop",
    precio: 2500,
    stock: 10,
  
    // precio con descuento
    precioConDescuento: function(descuentoPorc) {
      return this.precio - (this.precio * descuentoPorc) / 100;
    },
  
    // verifica disponibilidad
    disponibilidad: function() {
      return this.stock > 0 ? "disponible" : "agotado";
    },
  
    // muestra informacion completa
    mostrarInfo: function() {
      return `producto: ${this.nombre}\nprecio: $${this.precio}\nstock: ${this.stock}`;
    }
  };
  
  // mostrar resultados
  console.log("informacion producto:");
  console.log(Producto.mostrarInfo());
  console.log("disponibilidad:", Producto.disponibilidad());
  console.log("precio con 10% descuento:", Producto.precioConDescuento(10));
  
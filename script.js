// Lista inicial de productos
const productos = [
    {
      nombre: "Auriculares Bluetooth",
      precio: 25.99,
      descripcion: "Auriculares inalámbricos con micrófono y estuche de carga."
    },
    {
      nombre: "Teclado Mecánico",
      precio: 59.99,
      descripcion: "Teclado mecánico retroiluminado con switches rojos."
    },
    {
      nombre: "Webcam HD",
      precio: 39.99,
      descripcion: "Cámara HD 1080p con micrófono integrado."
    }
  ];
  
  // Referencia al elemento UL en el DOM
  const lista = document.getElementById("lista-productos");
  
  // Función para renderizar la lista
  function renderizarProductos() {
    lista.innerHTML = ""; // Limpiar contenido previo
  
    productos.forEach((producto, index) => {
      const item = document.createElement("li");
  
      item.innerHTML = `
        <strong>${producto.nombre}</strong><br>
        Precio: $${producto.precio.toFixed(2)}<br>
        <em>${producto.descripcion}</em>
      `;
  
      lista.appendChild(item);
    });
  }
  
  // Función para agregar un producto nuevo (ficticio)
  function agregarProducto() {
    const nuevo = {
      nombre: "Producto Nuevo " + (productos.length + 1),
      precio: (Math.random() * 100).toFixed(2),
      descripcion: "Descripción generada automáticamente."
    };
  
    productos.push(nuevo);
    renderizarProductos();
  }
  
  // Renderizar al cargar la página
  window.onload = renderizarProductos;
  
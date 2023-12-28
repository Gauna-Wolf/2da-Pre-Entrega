let nombre;
let menu;
let menuProductos;
let idCarrito = [];
let carrito = [];
let total = 0;
const descuentoo = 1000;
const camara = {
  nombre: 'camara hd',
  precio: 2000,
};
const Mouse = {
  id: 2,
  nombre: 'Mouse con Led',
  precio: 5000,
};
const Teclado = {
  id: 3,
  nombre: 'Teclado',
  precio: 2000,
};
const Monitor = {
  id: 4,
  nombre: 'Monitor',
  precio: 18000,
};

do {
  nombre = prompt('Bienvenido a CompuMundo , ¿Cual es tu nombre?');
  if (nombre == null || nombre == "") {
    alert('Necesitas ingresar un nombre');
  }
} while (nombre == null || nombre == "");

alert('Hola ' + nombre);
console.log(nombre);

do {
  menu = prompt(
    "Que accion desea realizar " +
      nombre +
      '?\n\n1.- Seleccionar Productos\n2.- Ver Accesorios\n3.- Total del Articulos '
  );
  if (menu == 1) {
    menuProductos = prompt(
      'Selecciona el numero del producto que deseas agregar al carrito\n\n1. ' +
        camara.nombre +
        '\n2. ' +
        Mouse.nombre +
        '\n3. ' +
        Teclado.nombre +
        '\n4. ' +
        Monitor.nombre +
        '\n5. Ninguno'
    );
    if (menuProductos <= 5) {
      parseInt(idCarrito.push(menuProductos));
    } else {
      alert('Necesitas ingresar un opcion valida');
    }
  } else if (menu == 2) {
    for (let i = 0; i <= idCarrito.length; i++) {
      console.log(idCarrito[i]);
      if (idCarrito[i] == camara.id) {
        carrito.push(camara.nombre + '\n');
      } else if (idCarrito[i] == Mouse.id) {
        carrito.push(Mouse.nombre + '\n');
      } else if (idCarrito[i] == Teclado.id) {
        carrito.push(Teclado.nombre + '\n');
      } else if (idCarrito[i] == Monitor.id) {
        carrito.push(Monitor.nombre + '\n');
      }
    }
    alert('carrito:\n\n' + carrito);
    console.log(carrito);
  } else if (menu == 3) {
    for (let i = 0; i <= idCarrito; i++) {
      if (idCarrito[i] == camara.id) {
        total = total + camara.precio;
      } else if (idCarrito[i] == Mouse.id) {
        total = total + Mouse.precio;
      } else if (idCarrito[i] == Teclado.id) {
        total = total + Teclado.precio;
      } else if (idCarrito[i] == Monitor.id) {
        total = total + Monitor.precio;
      }
    }
    alert('En total a pagar es : $' + total + "");

    let promo = prompt('Quieres un descuento?' + '?\n\n1.- si \n2.- no');

    if (promo === '1') {
      function descuento() {
        let descuento = total - descuentoo;
        alert(
          'el descuento por compra es ' +
            ' ' +
            descuentoo +
            ' precio final' +
            descuento
        );
      }
      descuento();
    } else {
      alert('Hasta Pronto');
    }
  }
} while (menu != 3);

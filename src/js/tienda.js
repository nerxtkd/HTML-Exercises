// Get the modal
var modal = document.getElementById("modalTienda");

// Get the button that opens the modal
var btn = document.getElementById("MyBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Array para almacenar productos del carrito
let carrito = [];

// Seleccionamos todos los botones "Añadir al carrito"
const botones = document.querySelectorAll("button.Carrito");

// Contenedor del modal donde mostraremos el carrito
const modalContenido = document.querySelector(".modal-content p.modal");

// Función para actualizar el contenido del carrito en el modal
function actualizarCarrito() {
  if(carrito.length === 0){
    modalContenido.innerHTML = "🛒 El carrito está vacío 🛒";
    return;
  }
  let html = "<strong>🛒 ARTÍCULOS DEL CARRITO 🛒</strong><br><br>";
  let total = 0;
  carrito.forEach((item, index) => {
    html += `${item.nombre} - ${item.precio}€ <button onclick="eliminarDelCarrito(${index})">Eliminar</button><br>`;
    total += item.precio;
  });
  html += `<br><strong>Total: ${total}€</strong>`;
  modalContenido.innerHTML = html;
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Añadimos evento click a todos los botones
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const producto = JSON.parse(btn.getAttribute("data-product"));
    carrito.push(producto);
    actualizarCarrito();
    alert(`${producto.nombre} añadido al carrito`);
  });
});

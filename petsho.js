// Obtener todos los subcontenedores
const subcontenedores = document.querySelectorAll('.subcontenedor');

// Función para crear un nuevo subcontenedor
function crearSubcontenedor() {
  const nuevoSubcontenedor = document.createElement('div');
  nuevoSubcontenedor.className = 'subcontenedor';

  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = './imagenes/perro99.jpg';
  nuevaImagen.alt = 'Imagen 9';
  nuevaImagen.className = 'imagen';

  const nuevoTexto = document.createElement('p');
  nuevoTexto.textContent = 'nombre \nTelefono | Correo\npais\nAbout me about me about me about me about me about me about me about me about me about me about me';

  const botonEditar = document.createElement('button');
  botonEditar.textContent = 'Editar';
  botonEditar.className = 'editar';
  botonEditar.addEventListener('click', editarSubcontenedor);

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.className = 'eliminar';
  botonEliminar.addEventListener('click', eliminarSubcontenedor);

  nuevoSubcontenedor.appendChild(nuevaImagen);
  nuevoSubcontenedor.appendChild(nuevoTexto);
  nuevoSubcontenedor.appendChild(botonEditar);
  nuevoSubcontenedor.appendChild(botonEliminar);

  // Agregar el evento de clic al nuevo subcontenedor
  nuevoSubcontenedor.addEventListener('click', seleccionarSubcontenedor);

  // Agregar el nuevo subcontenedor a la lista de subcontenedores
  document.querySelector('.subcontenedores').appendChild(nuevoSubcontenedor);
}

// Función para editar un subcontenedor
function editarSubcontenedor(event) {
  const subcontenedor = event.target.closest('.subcontenedor');
  const imagen = subcontenedor.querySelector('.imagen').src;
  const texto = subcontenedor.querySelector('p').textContent;

  // Aquí puedes implementar la lógica para editar el subcontenedor
  // Por ejemplo, abrir un formulario o mostrar un cuadro de diálogo de edición
  console.log('Editar subcontenedor:', imagen, texto);
}

// Función para eliminar un subcontenedor
function eliminarSubcontenedor(event) {
  const subcontenedor = event.target.closest('.subcontenedor');
 // Mostrar ventana emergente de confirmación
 const confirmacion = window.confirm('¿Estás seguro de eliminar a esta mascota?');
  
 if (confirmacion) {
   subcontenedor.remove();
 }
}

// Resto del código...

// Agregar el evento de clic a los botones de editar y eliminar en cada subcontenedor
const botonesEditar = document.querySelectorAll('.editar');
botonesEditar.forEach((boton) => {
  boton.addEventListener('click', editarSubcontenedor);
});

const botonesEliminar = document.querySelectorAll('.eliminar');
botonesEliminar.forEach((boton) => {
  boton.addEventListener('click', eliminarSubcontenedor);
});

// Ejemplo de uso:

// Crear un nuevo subcontenedor
crearSubcontenedor();

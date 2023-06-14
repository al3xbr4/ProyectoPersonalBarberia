// Obtener todas las imágenes de los productos
const images = document.querySelectorAll('.item-image img');

// Agregar un evento de clic a cada imagen
images.forEach(image => {
  image.addEventListener('click', function() {
    // Crear un elemento de imagen en pantalla completa
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = this.src;
    fullscreenImage.classList.add('fullscreen-image');

    // Crear un contenedor para la imagen en pantalla completa
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen-container');
    fullscreenContainer.appendChild(fullscreenImage);

    // Agregar el contenedor de pantalla completa al body
    document.body.appendChild(fullscreenContainer);

    // Agregar un evento de clic al contenedor de pantalla completa para cerrarlo
    fullscreenContainer.addEventListener('click', function() {
      document.body.removeChild(this);
    });
  });
});

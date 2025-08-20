/* script.js */
$(document).foundation();

// Esperamos a que toda la página cargue para asegurarnos de que el JavaScript
// no intente usar elementos que todavía no existen.
document.addEventListener('DOMContentLoaded', function () {
    
  // Guardamos referencias a las partes importantes del modal de la galería
  const galleryModal = document.getElementById('galleryModal'); // El modal en sí
  const modalImage = document.getElementById('modalImage'); // La imagen que se muestra ampliada

  // Cuando se vaya a abrir el modal, capturamos el evento
  galleryModal.addEventListener('show.bs.modal', function (event) {
  
      // La imagen que disparó el modal (la que clickeamos)
      const triggerImage = event.relatedTarget;
  
      // Sacamos la dirección de esa imagen
      const imageUrl = triggerImage.getAttribute('src');
  
      // Ponemos esa dirección en la imagen del modal para mostrarla en grande
      modalImage.setAttribute('src', imageUrl);
  });

});
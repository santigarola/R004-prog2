/* script.js */

// Espera a que todo el contenido del HTML esté cargado antes de ejecutar el script
// Esto evita errores si el script se carga antes que los elementos del DOM
document.addEventListener('DOMContentLoaded', function () {
    
  // Obtenemos referencias a los elementos importantes del DOM
  const galleryModal = document.getElementById('galleryModal'); // El modal de la galería
  const modalImage = document.getElementById('modalImage'); // La imagen dentro del modal

  // Bootstrap dispara un evento 'show.bs.modal' justo antes de mostrar un modal
  // Escuchamos ese evento para poder actualizar la imagen dentro del modal
  galleryModal.addEventListener('show.bs.modal', function (event) {
  
      // 'event.relatedTarget' es la imagen que se clickeó y abrió el modal
      const triggerImage = event.relatedTarget;
  
      // Obtenemos la URL de la imagen clickeada
      const imageUrl = triggerImage.getAttribute('src');
  
      // Ponemos esa URL en la imagen que está dentro del modal
      modalImage.setAttribute('src', imageUrl);
  });

});
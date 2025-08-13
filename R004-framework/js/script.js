/* script.js */

// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script.
// Es una buena práctica para evitar errores si el script se carga antes que el HTML.
document.addEventListener('DOMContentLoaded', function () {
    
    // Obtener referencias a los elementos del DOM
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');

    // Bootstrap dispara un evento 'show.bs.modal' justo antes de abrir un modal.
    // Escuchamos ese evento en nuestro modal específico.
    galleryModal.addEventListener('show.bs.modal', function (event) {
    
      // 'event.relatedTarget' es el elemento que disparó el modal (en este caso, la imagen clickeada).
        const triggerImage = event.relatedTarget;
    
      // Obtenemos la URL de la imagen del atributo 'src' de la imagen clickeada.
        const imageUrl = triggerImage.getAttribute('src');
    
      // Asignamos esa URL a la imagen que está dentro del modal.
        modalImage.setAttribute('src', imageUrl);
    });

});
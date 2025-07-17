
/**
 * Espera a que cargue el DOM antes de ejecutar.
 * Así se asegura que existan el formulario y el overlay.
 * Al enviar, evita recargar y muestra el mensaje de gracias.
 */


document.addEventListener('DOMContentLoaded', function() {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    const contactForm = document.getElementById('contactForm');
    const thankYouOverlay = document.getElementById('thankYouOverlay');
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleContactFormSubmit
     * Evita el envío normal y muestra un overlay de agradecimiento.
     */
    const handleContactFormSubmit = (event) => {
      event.preventDefault();
      thankYouOverlay.style.display = 'flex';
    };
  
    // ========================
    // Eventos
    // ========================
  
    contactForm.addEventListener('submit', handleContactFormSubmit);
  

});
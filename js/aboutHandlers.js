(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    // Pestañas de la sección About
    const tabs = document.querySelectorAll('.design-process__tab');
    const steps = document.querySelectorAll('.design-process__step');
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleAboutTabClick
     * Cambia el contenido mostrado al hacer clic en una pestaña.
     */
    const handleAboutTabClick = (tab) => {
      const targetId = tab.getAttribute('data-target');
  
      // Desactiva todas las pestañas
      tabs.forEach((t) => t.classList.remove('design-process__tab--active'));
  
      // Activa la pestaña seleccionada
      tab.classList.add('design-process__tab--active');
  
      // Muestra solo el paso correspondiente
      steps.forEach((step) => {
        step.hidden = step.id !== targetId;
      });
    };
  
    // ========================
    // Eventos
    // ========================
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => handleAboutTabClick(tab));
    });
  
  })();
  
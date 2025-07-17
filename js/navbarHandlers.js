(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    // Contenedor de la cabecera
    const headerContainer = document.querySelector('.header__inner');
  
    // Botón para alternar el menú de navegación en móviles
    const toggleButton = document.querySelector('.header__toggle');
  
    // Contenedor del menú de navegación
    const navMenuContainer = document.querySelector('.header__nav');
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleNavbarScroll
     * Maneja el efecto de scroll en la navbar.
     * Agrega o quita la clase 'scrolled' según la posición del scroll.
     */
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        headerContainer.classList.add('scrolled');
      } else {
        headerContainer.classList.remove('scrolled');
      }
    };
  
    /**
     * toggleNavMenuHandler
     * Alterna la visibilidad del menú de navegación en móviles.
     */
    const toggleNavMenuHandler = () => {
      navMenuContainer.classList.toggle('active');
    };
  
    // ========================
    // Eventos
    // ========================
  
    window.addEventListener('scroll', handleNavbarScroll);
    toggleButton.addEventListener('click', toggleNavMenuHandler);
  
  })();
  
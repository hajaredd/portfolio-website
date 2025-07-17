(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    const carousel = document.querySelector('.projects__carousel');
    let isDragging = false;
    let startX;
    let scrollLeft;
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleCarouselMouseDown
     * Inicia el arrastre del carrusel.
     */
    const handleCarouselMouseDown = (e) => {
      isDragging = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };
  
    /**
     * handleCarouselMouseLeave
     * Termina el arrastre si el mouse sale.
     */
    const handleCarouselMouseLeave = () => {
      isDragging = false;
      carousel.classList.remove('active');
    };
  
    /**
     * handleCarouselMouseUp
     * Finaliza el arrastre.
     */
    const handleCarouselMouseUp = () => {
      isDragging = false;
      carousel.classList.remove('active');
    };
  
    /**
     * handleCarouselMouseMove
     * Desplaza el carrusel mientras se arrastra.
     */
    const handleCarouselMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3;
      carousel.scrollLeft = scrollLeft - walk;
    };
  
    // ========================
    // Eventos
    // ========================
  
    carousel.addEventListener('mousedown', handleCarouselMouseDown);
    carousel.addEventListener('mouseleave', handleCarouselMouseLeave);
    carousel.addEventListener('mouseup', handleCarouselMouseUp);
    carousel.addEventListener('mousemove', handleCarouselMouseMove);
  
  })();
  
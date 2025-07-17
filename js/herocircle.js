(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    // Elemento círculo central en la sección Hero
    const centralCircle = document.getElementById('centralCircle');
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleHeroMouseMove
     * Ajusta el desenfoque del círculo central según la distancia del mouse.
     */
    const handleHeroMouseMove = (event) => {
      const circleRect = centralCircle.getBoundingClientRect();
      const centerX = circleRect.left + circleRect.width / 2;
      const centerY = circleRect.top + circleRect.height / 2;
  
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Calcula la distancia entre el mouse y el centro del círculo
      const distance = Math.hypot(mouseX - centerX, mouseY - centerY);
  
      const maxBlur = 100;
      const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;
  
      // Desenfoque proporcional
      const blurAmount = Math.min(maxBlur, (distance / maxDistance) * maxBlur);
      centralCircle.style.filter = `blur(${blurAmount}px)`;
    };
  
    // ========================
    // Eventos
    // ========================
  
    document.addEventListener('mousemove', handleHeroMouseMove);
  
  })();

  
(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    // Botón "Runaway"
    const runawayButton = document.getElementById('runaway-call-button');
    const contactWrapper = document.querySelector('.contact-page-wrapper');
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleRunawayMouseMove
     * Mueve el botón cuando el mouse se acerca.
     */
    const handleRunawayMouseMove = (e) => {
      const threshold = 120; // Distancia mínima para activar el movimiento
      const speedFactor = 4;  // Multiplicador para que huya más rápido

      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      const btnRect = runawayButton.getBoundingClientRect();
      const btnX = btnRect.left + btnRect.width / 2;
      const btnY = btnRect.top + btnRect.height / 2;
  
      const distX = mouseX - btnX;
      const distY = mouseY - btnY;
      const distance = Math.hypot(distX, distY);
  
      if (distance < threshold) {

        // Se multiplica por speedFactor para moverlo más rápido.
      // Se añade Math.random() para que el desplazamiento tenga un pequeño factor de aleatoriedad.
      // Esto evita que el botón siempre huya en línea recta, haciéndolo menos predecible y más difícil de atrapar.
        let offsetX = (btnX - mouseX) * speedFactor + (Math.random() - 0.5) * 50;
        let offsetY = (btnY - mouseY) * speedFactor + (Math.random() - 0.5) * 50;
  
        let newLeft = btnRect.left + offsetX;
        let newTop = btnRect.top + offsetY;
  
        const wrapperWidth = contactWrapper.clientWidth;
        const wrapperHeight = contactWrapper.clientHeight;
       // newLeft nunca puede ser menor que 0 o mayor que el ancho del contenedor menos el ancho del botón
        newLeft = Math.max(0, Math.min(wrapperWidth - btnRect.width, newLeft));
        // newTop nunca puede ser menor que 0 o mayor que la altura del contenedor menos la altura del botón
        newTop = Math.max(0, Math.min(wrapperHeight - btnRect.height, newTop));
  
        runawayButton.style.position = 'absolute'; // Se posiciona de forma absoluta dentro del contenedor
      runawayButton.style.left = `${newLeft}px`; // Nueva posición horizontal
      runawayButton.style.top = `${newTop}px`;   // Nueva posición vertical
      }
    };
  
    // ========================
    // Eventos
    // ========================
  
    document.addEventListener('mousemove', handleRunawayMouseMove);
  
  })();
  
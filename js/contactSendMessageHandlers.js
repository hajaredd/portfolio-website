(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    const sendMessageButton = document.getElementById('send-message-button');
    const hoverMessage = document.getElementById('hover-message');
  
    // ========================
    // Funciones Handlers
    // ========================
    let hoverTimeout;
    /**
     * handleSendMessageHover
     * Muestra el mensaje cuando el mouse entra.
     */
    const handleSendMessageHover = () => {
      clearTimeout(hoverTimeout);
      hoverMessage.classList.add('show');
    };
  
    /**
     * handleSendMessageLeave
     * Oculta el mensaje cuando el mouse sale.
     */
    const handleSendMessageLeave = () => {
      hoverTimeout = setTimeout(() => {
        hoverMessage.classList.remove('show');
      }, 50); //retraso para reducir el parpadeo
    };
  
    // ========================
    // Eventos
    // ========================
  
    sendMessageButton.addEventListener('mouseenter', handleSendMessageHover);
    sendMessageButton.addEventListener('mouseleave', handleSendMessageLeave);
  
  })();
  
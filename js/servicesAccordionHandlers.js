(() => {
    'use strict';
  
    // ========================
    // Variables y constantes
    // ========================
  
    // Ítems del acordeón de servicios
    const accordionItems = document.querySelectorAll('.services-accordion__item');
  
    // ========================
    // Funciones Handlers
    // ========================
  
    /**
     * handleServicesAccordionClick
     * Abre o cierra el ítem del acordeón seleccionado.
     * Cierra los demás.
     */
    const handleServicesAccordionClick = (item) => {
      const title = item.querySelector('.services-accordion__title');
      const content = item.querySelector('.services-accordion__content');
  
      // Cierra los otros ítems
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector('.services-accordion__title').classList.remove('services-accordion__title--active');
          otherItem.querySelector('.services-accordion__content').classList.remove('services-accordion__content--active');
        }
      });
  
      // Alterna el ítem actual
      title.classList.toggle('services-accordion__title--active');
      content.classList.toggle('services-accordion__content--active');
    };
  
    // ========================
    // Eventos
    // ========================
  
    accordionItems.forEach((item) => {
      const title = item.querySelector('.services-accordion__title');
      title.addEventListener('click', () => handleServicesAccordionClick(item));
    });
  
    // Abre el primer ítem por defecto
    const firstItem = accordionItems[0];
    if (firstItem) {
      const firstTitle = firstItem.querySelector('.services-accordion__title');
      const firstContent = firstItem.querySelector('.services-accordion__content');
      firstTitle.classList.add('services-accordion__title--active');
      firstContent.classList.add('services-accordion__content--active');
    }
  
  })();
  
document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Manejo del Formulario de Contacto
  // ==========================================
  const formulario = document.querySelector('.formulario-contacto');

  if (formulario) {
    formulario.addEventListener('submit', (evento) => {
      // Evita que la página se recargue al enviar
      evento.preventDefault();

      // Captura el nombre ingresado
      const nombreInput = document.getElementById('nombre');
      const nombreUsuario = nombreInput ? nombreInput.value : 'amigo/a';

      // Mensaje de éxito
      alert(`¡Gracias por tu mensaje, ${nombreUsuario}! Me pondré en contacto contigo pronto.`);

      // Limpia los campos del formulario
      formulario.reset();
    });
  }

  // ==========================================
  // 2. Alternador de Modo Claro / Oscuro
  // ==========================================
  // Crear el botón dinámicamente desde JS
  const botonModo = document.createElement('button');
  botonModo.id = 'toggle-theme';
  botonModo.textContent = '☀️ Modo Claro';
  botonModo.setAttribute('aria-label', 'Cambiar tema de la página');

  // Insertar el botón en la esquina superior derecha
  document.body.prepend(botonModo);

  // Aplicar estilos básicos al botón flotante
  Object.assign(botonModo.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 16px',
    borderRadius: '20px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--card-bg)',
    color: 'var(--text-primary)',
    fontWeight: '600',
    cursor: 'pointer',
    zIndex: '1000',
    transition: 'transform 0.2s ease, background-color 0.2s ease'
  });
             
  // Efectos hover al botón por JS
  botonModo.addEventListener('mouseenter', () => botonModo.style.transform = 'scale(1.05)');
  botonModo.addEventListener('mouseleave', () => botonModo.style.transform = 'scale(1)');

  // Función para alternar el tema
  botonModo.addEventListener('click', () => {
    document.body.classList.toggle('modo-claro');
    const esModoClaro = document.body.classList.contains('modo-claro');

    // Cambiar texto e ícono según el estado
    botonModo.textContent = esModoClaro ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
  });

});
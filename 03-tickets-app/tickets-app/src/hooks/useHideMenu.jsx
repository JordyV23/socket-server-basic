/**
 * Hook personalizado para controlar la visibilidad del menú utilizando el contexto UiContext.
 * @param {boolean} ocultar - Indica si se debe ocultar el menú (true) o mostrarlo (false).
 */
export const useHideMenu = (ocultar) => {
  // Obtiene las funciones showMenu y hideMenu del contexto UiContext
  const { showMenu, hideMenu } = useContext(UiContext);

  // Efecto secundario que se ejecuta cuando ocultar cambia
  useEffect(() => {
    // Si ocultar es true, oculta el menú; de lo contrario, muestra el menú
    if (ocultar) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [ocultar, hideMenu, showMenu]); // Dependencias del efecto secundario
};

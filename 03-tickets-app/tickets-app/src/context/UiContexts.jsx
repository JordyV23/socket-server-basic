// Importa las funciones y componentes necesarios de React
import React, { createContext, useState } from "react";

// Crea un nuevo contexto llamado UiContext
export const UiContext = createContext();

// Crea un componente llamado UiProvider que utiliza el contexto
export const UiProvider = ({ children }) => {
  // Utiliza el estado local para controlar la visibilidad del menú
  const [ocultarMenu, setOcultarMenu] = useState(true);

  // Función para mostrar el menú
  const showMenu = () => {
    setOcultarMenu(false);
  };

  // Función para ocultar el menú
  const hideMenu = () => {
    setOcultarMenu(true);
  };

  // Proporciona el contexto con los valores actuales del estado y funciones
  return (
    <UiContext.Provider value={{ ocultarMenu, showMenu, hideMenu }}>
      {children}
    </UiContext.Provider>
  );
};

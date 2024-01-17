import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Layout, Menu, theme } from "antd";

import { sidebarItems, routerItems } from "../utils";

import { UiContext } from "../context/UiContexts";

const { Sider, Content } = Layout;

/**
 * Componente principal que define la estructura del enrutador de la aplicación.
 * Utiliza el contexto UiContext para controlar la visibilidad del menú.
 * @returns {JSX.Element} Elemento JSX que representa la estructura del enrutador.
 */
export const RouterPage = () => {
  // Obtiene los tokens del tema para la personalización del estilo
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Obtiene el estado de ocultar el menú del contexto UiContext
  const { ocultarMenu } = useContext(UiContext);

  // Renderiza la estructura del enrutador
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        {/* Barra lateral (Sider) */}
        <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={sidebarItems}
          />
        </Sider>
        {/* Contenido principal (Layout) */}
        <Layout>
          {/* Contenido de la página (Content) */}
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Definición de rutas */}
            <Routes>
              {routerItems.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}

              {/* Redirección por defecto a la página de ingreso */}
              <Route path="/*" element={<Navigate to="/ingresar" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

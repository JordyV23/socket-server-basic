import React, { useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { ArrowRightOutlined, LogoutOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { Navigate, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

/**
 * Componente que representa la interfaz del escritorio de atención al cliente.
 * Utiliza el hook useHideMenu para mostrar el menú.
 * @returns {JSX.Element} Elemento JSX que representa la interfaz del escritorio.
 */
export const Escritorio = () => {
  // Utiliza el hook useHideMenu para mostrar el menú
  useHideMenu(false);

  // Obtiene la información del usuario almacenada en el localStorage
  const [usuario] = useState(getUsuarioStorage);

  // Hook de navegación para redirigir a otras páginas
  const navigateTo = useNavigate();

  // Función para cerrar sesión
  const salir = () => {
    localStorage.clear();
    navigateTo("/ingresar");
  };

  // Función para atender al siguiente ticket
  const siguienteTicket = () => {
    alert("Siguiente");
  };

  // Si no hay información del usuario, redirige a la página de ingreso
  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to="/ingresar" />;
  }

  // Renderiza la interfaz del escritorio
  return (
    <>
      <Row>
        <Col span={20}>
          {/* Información del agente y escritorio */}
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio</Text>
          <Text> {usuario.escritorio} </Text>
        </Col>

        <Col span={4} align="right">
          {/* Botón para salir */}
          <Button shape="round" type="primary" onClick={salir} danger>
            <LogoutOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          {/* Información del ticket actualmente siendo atendido */}
          <Text>Se encuentra atendiendo al ticket número: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            #
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          {/* Botón para atender al siguiente ticket */}
          <Button onClick={siguienteTicket} shape="round" type="primary">
            Siguiente
            <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

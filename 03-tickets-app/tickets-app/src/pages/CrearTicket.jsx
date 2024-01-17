import React from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

/**
 * Componente para la creación de nuevos tickets.
 * Utiliza el hook useHideMenu para ocultar el menú.
 * @returns {JSX.Element} Elemento JSX que representa la interfaz de creación de tickets.
 */
export const CrearTicket = () => {
  // Utiliza el hook useHideMenu para ocultar el menú
  useHideMenu(true);

  // Función para crear un nuevo ticket
  const nuevoTicket = () => {
    console.log("Nuevo Ticket");
  };

  // Renderiza la interfaz de creación de tickets
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          {/* Título y botón para un nuevo ticket */}
          <Title level={3}>Presione el botón para un nuevo ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<ArrowDownOutlined />}
            size="large"
            onClick={nuevoTicket}
          ></Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          {/* Número de ticket generado */}
          <Text level={2}>Su Número</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};

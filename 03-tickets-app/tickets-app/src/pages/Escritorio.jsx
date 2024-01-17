import React, { useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { ArrowRightOutlined, LogoutOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { Navigate, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const navigateTo = useNavigate();
  useHideMenu(false);

  const [usuario] = useState(getUsuarioStorage);

  const salir = () => {
    localStorage.clear();
    navigateTo("/ingresar");
  };

  const siguienteTicket = () => {
    alert("Siguiente");
  };

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to="/ingresar" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el escritorio</Text>
          <Text> {usuario.escritorio} </Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="primary" onClick={salir} danger>
            <LogoutOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Se encuentra antendiendo al ticker numero: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            #
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket} shape="round" type="primary">
            Siguiente
            <ArrowRightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};

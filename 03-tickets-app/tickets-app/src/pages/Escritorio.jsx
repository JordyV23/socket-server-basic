import React from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { ArrowRightOutlined, LogoutOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const salir = () => {
    alert("Salir");
  };

  const siguienteTicket = () => {
    alert("Siguiente");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>User</Title>
          <Text>Usted esta trabajando en el escritorio</Text>
          <Text>#</Text>
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

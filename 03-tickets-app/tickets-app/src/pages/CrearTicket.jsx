import { ArrowDownOutlined, RobotFilled } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import React from "react";

const { Title, Text } = Typography;

export const CrearTicket = () => {
  useHideMenu(true);

  const nuevoTicket = () => {
    console.log("Nuevo Ticket");
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el boton para un nuevo ticket</Title>

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
          <Text level={2}>Su Numero</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};

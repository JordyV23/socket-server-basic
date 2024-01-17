import React from "react";
import { Button, Card, Col, List, Row, Tag, Typography, Divider } from "antd";
import { data } from "../utils/tempData";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

/**
 * Componente que muestra la cola de atención al cliente y su historial.
 * Utiliza el hook useHideMenu para ocultar el menú.
 * @returns {JSX.Element} Elemento JSX que representa la interfaz de la cola.
 */
export const Cola = () => {
  // Utiliza el hook useHideMenu para ocultar el menú
  useHideMenu(true);

  // Renderiza la interfaz de la cola
  return (
    <>
      <Title level={1}>Atendiendo al Cliente</Title>
      <Row>
        <Col span={12}>
          {/* Lista de clientes en espera */}
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                {/* Tarjeta de cliente */}
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">{item.escritorio}</Tag>,
                  ]}
                >
                  <Title> No. {item.ticketNo} </Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          {/* Historial de atención al cliente */}
          <Divider> Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                {/* Meta información del cliente */}
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary"> En el escritorio</Text>
                      <Tag color="magenta">{item.ticketNo}</Tag>
                      <Text type="secondary"> Agente: </Text>
                      <Tag color="volcano">{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

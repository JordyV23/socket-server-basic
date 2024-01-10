import { Button, Card, Col, List, Row, Tag, Typography,Divider } from "antd";
import React from "react";
import { data } from "../utils/tempData";

const { Title, Text } = Typography;

export const Cola = () => {
  return (
    <>
      <Title level={1}>Atendiendo al Cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
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
          <Divider> Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary"> En el escriotiro</Text>
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

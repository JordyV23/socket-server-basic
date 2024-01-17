import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Typography,
} from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
const { Title, Text } = Typography;

/**
 * Componente para la autenticación y acceso a la aplicación.
 * Utiliza el hook useHideMenu para mostrar el menú.
 * Redirige a la página de escritorio si ya hay un usuario autenticado.
 * @returns {JSX.Element} Elemento JSX que representa la interfaz de autenticación.
 */
export const Ingresar = () => {
  // Hook de navegación para redirigir a otras páginas
  const navigateTo = useNavigate();

  // Obtiene la información del usuario almacenada en el localStorage
  const [usuario] = useState(getUsuarioStorage);

  // Utiliza el hook useHideMenu para mostrar el menú
  useHideMenu(false);

  // Función que se ejecuta al enviar el formulario
  const onFinish = ({ agente, escritorio }) => {
    // Almacena la información del usuario en el localStorage
    localStorage.setItem("agente", agente);
    localStorage.setItem("escritorio", escritorio);

    // Redirige a la página de escritorio
    navigateTo("/escritorio");
  };

  // Función que se ejecuta en caso de error al enviar el formulario
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Si ya hay un usuario autenticado, redirige a la página de escritorio
  if (usuario.agente && usuario.escritorio) {
    return <Navigate to="/escritorio" />;
  }

  // Renderiza la interfaz de autenticación
  return (
    <>
      <Title level={2}> Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Campo para el nombre del agente */}
        <Form.Item
          label="Nombre del Agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Campo para el número de escritorio */}
        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el número de escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        {/* Botón para enviar el formulario */}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <LoginOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

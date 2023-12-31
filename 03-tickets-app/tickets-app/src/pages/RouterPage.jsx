import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Layout, Menu, theme } from "antd";

import { sidebarItems, routerItems } from "../utils";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={sidebarItems}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              {routerItems.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}

              <Route
                path={routerItems[0].path}
                element={routerItems[0].element}
              />

              <Route path="/*" element={<Navigate to="/ingresar" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

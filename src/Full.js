import React from "react";
import { Breadcrumb, Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const Full = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Layout className="layout">
        <Header
          className="cls-head"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="demo-logo">Discussion Board</div>
          <div className="float-right">
            <Button onClick={HandleClick}>Logout</Button>{" "}
          </div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default Full;

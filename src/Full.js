import React from "react";
import { Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import DiscussionList from "./components/DiscussionList";
const { Header, Content, Footer } = Layout;

const Full = ({ children }) => {
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
            position: "sticky",
            top: 0,
            zIndex: 1,
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
          className="content-class"
          style={{
            padding: "0 50px",
          }}
        >
          <div className="site-layout-content">{children}</div>
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

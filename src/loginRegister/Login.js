import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Avatar, message } from "antd";
import img from "../img/logo192.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ROOTURL } from "..";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { email, password } = values;
    axios
      .post(`${ROOTURL}api/login`, { email, password })
      .then((res) => {
        if (res.status === 200) {
          let token = res.data.token;
          sessionStorage.setItem("token", token);
          message.success("logged in successfull");
          navigate("/discussionList");
        } else {
          message.error(res.data.error);
        }
      })
      .catch(() => {
        message.error("login failed");
      });
  };
  return (
    <div>
      <div className="reg-form">
        <div className="reg-form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item name="propertyImage" className="text-center">
              <Avatar
                className="form-avatar"
                src={<img src={img} alt="avatar" />}
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                // icon={<AntDesignOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email Id"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <Link to="register">register now!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

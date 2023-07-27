import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Avatar, message } from "antd";
import img from "../img/logo192.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ROOTURL } from "..";

const Register = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const { email, username, password } = values;
    console.log("Received values of form: ", values);
    axios
      .post(`${ROOTURL}api/register`, {
        email,
        name: username,
        password,
      })
      .then(
        (response) => {
          if (response.status === 201) {
            message.success("User Regestered!!!");
            navigate("/");
          } else {
            message.error(response.data.error);
          }
        },
        (error) => {
          console.log(error);
          message.error("User Regesteration failed");
        }
      );
  };
  return (
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
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
            Register
          </Button>
          Or <Link to="/">login now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;

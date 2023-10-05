import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const handleLogin = () => {
    // Retrieve user data from local storage
    const storedEmail = localStorage.getItem('Myemail');
    const storedPwd = localStorage.getItem('Mypsw');

    if (email === storedEmail && pwd === storedPwd) {
      // Email and password match, user is logged in
      alert('Login successful!');
    } else {
      // Email and password do not match, show an error message
      alert('Login failed. Please check your email and password.');
    }
  }

  return (
    <div className='login-main-div'>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleLogin}
        autoComplete="off"
      >
        <h3>Login Your Form</h3>
        <Form.Item className='input-form'
          name="email"
          // label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item style={{ display: "flex", flexDirection: "column" }}
          // label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            value={pwd}
            placeholder='passwor'
            onChange={(e) => setPwd(e.target.value)}
          />
        </Form.Item>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
          </Form.Item>
          <Form.Item >
            <Link to="/dashboard" className="login-link-button" style={{ marginLeft: "10px" }}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                dashboard
              </Button>
            </Link>
          </Form.Item>
          <Form.Item >
            <Link to="/signup" className="login-link-button" style={{ marginLeft: "10px" }}>
              <Button type="primary" className="login-form-button">
                Signup
              </Button>
            </Link>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default Login;

import { Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    const storedEmail = localStorage.getItem('Myemail');
    const storedPwd = localStorage.getItem('Mypsw');

    if (email === storedEmail && pwd === storedPwd) {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your email and password.');
    }
    navigate("/dashboard")
  }

  return (
    <div >
      <div className='perent-div-login'>
        <div className='img-div'>
          <img className="img-form" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        </div>
        <div className='form-div'>
          <h3>Login Your Form</h3>
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
              <Input className='input'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item

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
                className='input'
                value={pwd}
                placeholder='passwor'
                onChange={(e) => setPwd(e.target.value)}
              />
            </Form.Item>
            <div className='button-group-div'>
              <Form.Item >
                <Button type="primary" htmlType="submit" className="form-button-color">
                  Login
                </Button>
              </Form.Item>
              <Form.Item >
                <Link to="/signup" className="login-link-button" >
                  <Button type="primary" className="form-button-color">
                    Signup
                  </Button>
                </Link>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

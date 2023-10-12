import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const navigate = useNavigate();

  const handleForm = () => {
    // Passwords match, you can save them to local storage
    localStorage.setItem("Myemail", email);
    localStorage.setItem("Mypsw", pwd);
    localStorage.setItem("Mycon_pwd", confirmPwd);
    alert("Form submitted successfully!");
    navigate("/dashboard")
  }
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <Form className='signup-main-div'
        {...formItemLayout}
        form={form}
        name="register"
        // onFinish={onFinish}
        onFinish={handleForm}
        autoComplete="off"
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <h3>Register Your Details!</h3>
        <Form.Item
          name="email"
          // label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="password"
          // label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder='password'
            value={pwd}
            onChange={(e) => setPwd(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="confirm"
          // label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder='Confirm_Password'
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)} />
        </Form.Item>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="signup-form-button">
              Register
            </Button>
          </Form.Item> */}
          <Form.Item >
            <Button type="primary" htmlType="submit" className="login-form-button">
              Ragister
            </Button>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Link className="signup-link-button" to="/login" style={{ marginLeft: "10px" }}>
              <Button type="primary" htmlType="submit" className="dashboard-form-button">
                Login
              </Button>
            </Link>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
export default App;
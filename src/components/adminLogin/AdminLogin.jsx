import { Form, Input, Button, Card } from 'antd';
import { LockOutlined, UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import './AdminLogin.css';

export default function AdminLogin() {
  const onFinish = (values) => {
    // Handle admin login here
    console.log('Admin Login:', values);
  };

  return (
    <div className="admin-login-bg">
      <Card className="admin-login-card" bordered={false}>
        <div className="admin-login-header">
          <SafetyCertificateOutlined className="admin-login-icon" />
          <h2>Admin Login</h2>
          <p className="admin-login-tagline">
            Secure portal for authorized administrators only.<br />
            <span className="admin-login-subtag">
              Manage, resolve, and oversee apartment complaints with Co-Man-S.
            </span>
          </p>
        </div>
        <Form
          name="admin_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your admin username!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Admin Username"
              size="large"
              autoComplete="username"
              className="admin-login-input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
              autoComplete="current-password"
              className="admin-login-input"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="admin-login-btn"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
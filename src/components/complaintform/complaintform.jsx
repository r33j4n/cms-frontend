import { Card, Row, Col } from 'antd';
import NICInput from './NICInput';
import ApartmentInput from './ApartmentInput';
import TypeDropdown from './TypeDropdown';
import ComplaintTextarea from './ComplaintTextarea';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';
import './complaintForm.css';

export default function ComplaintForm() {
  return (
    <Card className="complaint-card" bordered={false}>
      <form>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}><NICInput /></Col>
          <Col xs={24} md={8}><ApartmentInput /></Col>
          <Col xs={24} md={8}><TypeDropdown /></Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 10 }}>
          <Col xs={24} md={16}><ComplaintTextarea /></Col>
          <Col xs={24} md={8}><FileUpload /></Col>
        </Row>
        <Row justify="center" style={{ marginTop: 24 }}>
          <Col>
            <SubmitButton />
          </Col>
        </Row>
      </form>
    </Card>
  );
}
import { Button } from 'antd';

export default function SubmitButton() {
  return (
    <Button
      type="primary"
      htmlType="submit"
      size="large"
      className="submit-btn"
      style={{ background: '#002147', borderColor: '#002147' }}
    >
      Submit
    </Button>
  );
}
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function FileUpload() {
  return (
    <Upload
      name="proofFile"
      listType="picture"
      maxCount={1}
      accept="image/*,.pdf"
      style={{ width: '100%' }}
    >
      <Button icon={<UploadOutlined />} size="large" className="upload-btn">
        Upload Proof Image/File
      </Button>
    </Upload>
  );
}
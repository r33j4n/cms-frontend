import { Input } from 'antd';

export default function ComplaintTextarea() {
  return (
    <Input.TextArea
      rows={6}
      name="complaintText"
      placeholder="Write the Complaint/Suggestion Here"
      className="textarea-custom"
      maxLength={600}
      showCount
    />
  );
}
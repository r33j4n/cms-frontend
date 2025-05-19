import { Input } from 'antd';

export default function NICInput() {
  return (
    <Input
      name="nic"
      placeholder="NIC No"
      size="large"
      className="input-custom"
    />
  );
}
import { Input } from 'antd';

export default function ApartmentInput() {
  return (
    <Input
      name="apartmentNo"
      placeholder="Apartment No"
      size="large"
      className="input-custom"
    />
  );
}
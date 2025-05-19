import { Select } from 'antd';

export default function TypeDropdown() {
  return (
    <Select
      defaultValue="complaint"
      size="large"
      style={{ width: '100%' }}
      options={[
        { value: 'complaint', label: 'Complaint' },
        { value: 'suggestion', label: 'Suggestion' },
      ]}
      className="input-custom"
    />
  );
}
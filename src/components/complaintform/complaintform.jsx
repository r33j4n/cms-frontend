import NICInput from './NICInput';
import ApartmentInput from './ApartmentInput';
import TypeDropdown from './TypeDropdown';
import ComplaintTextarea from './ComplaintTextarea';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';

export default function ComplaintForm() {
  return (
    <form>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <NICInput />
        <ApartmentInput />
        <TypeDropdown />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <ComplaintTextarea />
        <FileUpload />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <SubmitButton />
      </div>
    </form>
  );
}
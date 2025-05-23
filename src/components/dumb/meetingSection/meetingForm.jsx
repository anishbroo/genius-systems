import FormButton from "./formButton";
import InputField from "./inputField";

function MeetingForm() {
  return (
    <form className="text-gray-300 form">
      <InputField label="Name:" placeholder="Contact Name" />
      <InputField label="Email:" placeholder="Email Address" />
      <InputField
        label="Phone(Optional):"
        placeholder="Contact Number"
        optionalText="+country code-phone number"
      />

      <div className="flex items-center justify-center gap-4">
        <FormButton label="Schedule a meeting" color="green" />
        <FormButton label="Cancel" color="red" />
      </div>
    </form>
  );
}

export default MeetingForm;

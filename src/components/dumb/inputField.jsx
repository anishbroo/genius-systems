function InputField({ label, placeholder, optionalText, type = "text" }) {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <label className="text-xl font-semibold">{label}</label>
      {optionalText && <p className="text-sm mb-2">{optionalText}</p>}
      <input
        className="w-[50%] mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;

function FormButton({ label, color, onClick = () => {} }) {
  const bgColor =
    color === "green"
      ? "bg-green-500 hover:bg-green-600 "
      : "bg-red-500 hover:bg-red-600";
  return (
    <button
      className={`w-[200px] ${bgColor} text-white font-semibold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default FormButton;

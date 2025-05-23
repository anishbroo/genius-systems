import CustomerData from "../data/customerData";

function CustomerItem() {
  return (
    <div className="max-w-xl p-6 bg-[#262626] rounded-xl mb-32">
      {CustomerData.map((cus, index) => (
        <div
          key={index}
          className={`text-center mb-5 ${
            index !== CustomerData.length - 1 ? "border-b" : ""
          }`}
        >
          <h2 className="text-gray-200 font-bold text-2xl mb-5">
            {cus.caption}
          </h2>
          <p className="text-xl mb-5 text-gray-300">{cus.subCaption}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerItem;

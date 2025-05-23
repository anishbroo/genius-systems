import FooterData from "../data/footer";

function FooterItem() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-wrap md:flex-row gap-4 justify-between">
      {FooterData.map((footer, index) => (
        <div
          key={index}
          className="w-full md:w-[38%] lg:w-[30%] text-center md:text-left p-4"
        >
          <h3 className="text-lg font-semibold mb-1">{footer.label}</h3>
          <p className="text-sm text-gray-400">{footer.subLabel}</p>
        </div>
      ))}
    </div>
  );
}

export default FooterItem;

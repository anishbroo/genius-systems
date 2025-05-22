const gearItems = [
  { label: "vU", description: "delivers seamless IPTV/OTT streaming" },
  {
    label: "iP",
    description: "provides comprehensive OSS, BSS, and AAA solutions for ISPs",
  },
  { label: "Wi", description: "ensures reliable WiFi hotspot management" },
];

function GearsItem() {
  return (
    <div className="flex items-center justify-evenly text-white text-center gears">
      {gearItems.map((gear, index) => (
        <div key={index} className="flex justify-center items-center flex-col">
          <h2 className="border border-white px-2 py-2 text-xl font-light rounded">
            {gear.label}
            <span className="text-green-500 font-semibold">Gear</span>
          </h2>
          <p className="text-sm italic mt-2 mb-4 text-gray-300">
            {gear.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GearsItem;

import MvsData from "./data/mvcData";

function MvcItem() {
  return (
    <div className="flex flex-wrap justify-around gap-6">
      {MvsData.map((mvc, index) => (
        <div
          key={index}
          className="max-w-xs  text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6"
        >
          <img src={mvc.image} />
          <h2 className="text-xl font-semibold">{mvc.heading}</h2>
          <p className="text-sm text-gray-200 mt-2">{mvc.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default MvcItem;

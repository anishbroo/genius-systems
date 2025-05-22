import CompetencyData from "./data/competencyData";

function CompetencyItem() {
  return (
    <div className="flex flex-col">
      {CompetencyData.map((comp, index) => (
        <div
          key={index}
          className="max-w-xl  w-[90%]  bg-[#262626] rounded-xl mb-4"
        >
          <div className="text-gray-300bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl  p-6">
            <h2 className="text-2xl font-semibold mb-2">{comp.heading}</h2>
            <p>{comp.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompetencyItem;

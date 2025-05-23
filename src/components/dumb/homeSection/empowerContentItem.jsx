import FeatureData from "../data/featureData";

function EmpowerContentItem() {
  return (
    <div className="flex flex-wrap justify-center gap-6 empower">
      {FeatureData.map((feature, index) => (
        <div
          key={index}
          className="max-w-xs text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6"
        >
          <img className="hover:animate-pulse" src={feature.image} />
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-sm text-gray-200 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EmpowerContentItem;

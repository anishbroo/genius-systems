import ComponentData from "./data/componentsData";

function ComponentsTDB() {
  return (
    <div className="flex flex-wrap justify-around gap-6">
      {ComponentData.map((tdb, index) => (
        <div
          key={index}
          className="max-w-xs w-[100%] text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6"
        >
          <ul className=" flex flex-col items-center">
            <img src={tdb.image} className="mb-4" />
            {tdb.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ComponentsTDB;

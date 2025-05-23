import CompetencyItem from "./competencyItem";
import ComponentsTDB from "./componentsTDB";
import GearsItem from "./gearsItem";
import GearsSpinnerSection from "./gearsSpinnerSection";
import MvcItem from "./mvcItem";
import SectionItem from "./sectionItem";

function GearsView({
  TextRef,
  WhoWeAreRef,
  CompentencyRef,
  ComponentsRef,
  MottoRef,
  TDBRef,
}) {
  return (
    <>
      <div className="bg-[#141817] py-8">
        <GearsSpinnerSection />
        <div ref={TextRef}>
          <GearsItem />
        </div>

        <div ref={WhoWeAreRef} className="text-gray-300 p-8 m-8">
          <SectionItem index={0} />
        </div>

        <div ref={ComponentsRef}>
          <MvcItem />
        </div>

        <div ref={MottoRef} className="text-gray-300 p-8 m-8">
          <SectionItem index={1} />
        </div>

        <div ref={TDBRef}>
          <ComponentsTDB />
        </div>

        <div
          ref={CompentencyRef}
          className="flex flex-col lg:flex-row justify-around text-gray-300 p-8 m-8"
        >
          <div className="text-white max-w-lg flex flex-col justify-center p-6">
            <SectionItem index={2} />
            <img src="/public/gears/competency.png" />
          </div>
          <CompetencyItem />
        </div>
      </div>
    </>
  );
}

export default GearsView;

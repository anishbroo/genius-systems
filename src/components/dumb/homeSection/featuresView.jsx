import { Link } from "react-router-dom";
import CustomerItem from "./customerItem";
import EmpowerContentItem from "./empowerContentItem";

function FeaturesView({
  heading,
  caption,
  letsCall,
  letsCallCaption,
  buttonText,
  empowerHeading,
  LetsCallRef,
  ProvenSuccessRef,
  EmpowerRef,
  EmpowerContentRef,
}) {
  return (
    <div className="bg-[#141817] p-8">
      <div
        ref={ProvenSuccessRef}
        className="flex flex-col md:flex-row justify-around features"
      >
        <div className="text-white max-w-lg flex flex-col justify-center p-6 ">
          <h2 className="text-4xl mb-2">{heading}</h2>
          <p className="mb-12">{caption}</p>
        </div>
        <CustomerItem />
      </div>

      {/* Lets get on a call */}
      <div
        ref={LetsCallRef}
        className="max-w-lg mx-auto px-28 py-12 mb-10 text-center text-4xl bg-[#262626] rounded-xl mb-24 call"
      >
        <h2 className="text-white text-4xl mb-2">{letsCall}</h2>
        <p className="text-gray-300 text-lg mb-6">{letsCallCaption}</p>
        <button className="text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <Link to="/meeting">{buttonText}</Link>
        </button>
      </div>

      <div ref={EmpowerRef} className="container">
        <h2 className="text-white text-center text-4xl font-light mb-8 empower">
          {empowerHeading}
        </h2>

        <div ref={EmpowerContentRef}>
          <EmpowerContentItem />
        </div>
      </div>
    </div>
  );
}

export default FeaturesView;

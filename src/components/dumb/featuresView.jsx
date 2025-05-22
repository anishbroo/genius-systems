function FeaturesView({
  heading1,
  caption1,
  heading2,
  caption2,
  heading3,
  caption3,
  heading4,
  caption4,
  heading5,
  caption5,
  letsCall,
  letsCallCaption,
  buttonText,
  empowerHeading,
  LetsCallRef,
  ProvenSuccessRef,
  EmpowerRef,
  EmpowerContentRef,
  featureData,
}) {
  return (
    <div className="bg-[#141817] p-8">
      {/* Proven Success */}
      <div
        ref={ProvenSuccessRef}
        className="flex flex-col md:flex-row justify-around features"
      >
        <div className="text-white max-w-lg flex flex-col justify-center p-6 ">
          <h2 className="text-4xl mb-2">{heading1}</h2>
          <p className="mb-12">{caption1}</p>
        </div>
        <div className="max-w-xl p-6 bg-[#262626] rounded-xl mb-32">
          <div className="border-b text-center mb-5">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">
              {heading2}
            </h2>
            <p className="text-xl mb-5 text-gray-300">{caption2}</p>
          </div>

          <div className="border-b text-center mb-5">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">
              {heading3}
            </h2>
            <p className="text-xl mb-5 text-gray-300">{caption3}</p>
          </div>

          <div className="border-b text-center mb-5">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">
              {heading4}
            </h2>
            <p className="text-xl mb-5 text-gray-300">{caption4}</p>
          </div>

          <div className="text-center">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">
              {heading5}
            </h2>
            <p className="text-xl mb-5 text-gray-300">{caption5}</p>
          </div>
        </div>
      </div>

      {/* Lets get on a call */}
      <div
        ref={LetsCallRef}
        className="max-w-lg mx-auto px-28 py-12 mb-10  text-center text-4xl bg-[#262626] rounded-xl mb-24 call"
      >
        <h2 className="text-white text-4xl mb-2">{letsCall}</h2>
        <p className="text-gray-300 text-lg mb-6">{letsCallCaption}</p>
        <button className="text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>

      {/* Empower features mx-4 px-4*/}
      <div ref={EmpowerRef} className="container">
        <h2 className="text-white text-center text-4xl font-light mb-8 empower">
          {empowerHeading}
        </h2>

        <div
          ref={EmpowerContentRef}
          className="flex flex-wrap justify-center gap-6 empower"
        >
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="max-w-xs text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6"
            >
              <img className="hover:animate-pulse" src={feature.image} />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-200 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesView;

function FooterView() {
  return (
    <div className="bg-[#141817]">
      <div className="flex justify-center sm:justify-between border-b border-gray-500 px-6 py-4 ">
        <div className="flex gap-3 rounded px-3 py-1">
          <img
            src="public/imagee.png"
            className="h-8 w-8"
            alt="Genius Systems Logo"
          />

          <h2 className="text-white text-xl font-semibold">
            GENIUS <span className="font-normal">|</span> SYSTEMS
          </h2>
        </div>
      </div>

      <div className="bg-[#141817] text-white py-6 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col sm:flex-col md:flex-wrap md:flex-row gap-4 justify-between">
          <div className="w-full md:w-[48%] lg:w-[30%] text-center md:text-left p-4">
            <h3 className="text-lg font-semibold mb-1">Find us</h3>
            <p className="text-sm text-gray-400">Bagdol-04, Lalitpur, Nepal</p>
          </div>
          <div className="w-full md:w-[38%] lg:w-[30%] text-center md:text-left p-4">
            <h3 className="text-lg font-semibold mb-1">Call us</h3>
            <p className="text-sm text-gray-400">+977-981239573</p>
          </div>
          <div className="w-full md:w-full lg:w-[30%] text-center md:text-left p-4">
            <h3 className="text-lg font-semibold mb-1">Mail us</h3>
            <p className="text-sm text-gray-400">info@geniussystems.com.np</p>
          </div>
        </div>
      </div>

      <div className="bg-[#202020]  text-center py-3">
        <p className="text-sm text-[rgba(243,243,243,0.4392156863)]">
          Copyright 2018 - 2024 Genius Systems Pvt. Ltd. (GSPL) | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default FooterView;

import FooterItem from "./footerItem";

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
        <FooterItem />
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

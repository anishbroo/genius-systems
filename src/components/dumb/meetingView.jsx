function MeetingView() {
  return (
    <div className="bg-[#141817] p-8">
      <form className="text-gray-300 form">
        <div className="flex flex-col items-center justify-center mb-8">
          <label className="text-xl font-semibold">Name:</label>
          <input
            className="w-[50%] mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Contact Name"
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <label className="text-xl font-semibold">Email:</label>
          <input
            className="w-[50%] mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Contact Email Address"
          />
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <label className="text-xl font-semibold">Phone(Optional):</label>
          <p className="text-sm mb-2">+country code phone number</p>
          <input
            className="w-[50%] mb-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Phone number with country code"
          />
        </div>
        <div className=" flex items-center justify-center gap-4">
          <button className="w-[200px] bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Request a Schedule
          </button>
          <button className="w-[200px] bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default MeetingView;

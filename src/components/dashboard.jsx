import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  useEffect(() => {
    gsap.set(".gsap", { opacity: 0 });
    gsap.to(".gsap", {
      opacity: 1,
      duration: 1,
      delay: 0.3,
      y: 10,
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-black text-white px-4 text-center">
      <h2 className="border border-white px-2 py-2 text-xl font-light rounded gsap">
        vU <span className="text-green-500 font-semibold">Gear</span>
      </h2>
      <p className="text-sm italic mt-2 mb-4 text-gray-300 gsap">
        where entertainment meets innovation
      </p>

      <h1 className="md:text-6xl text-4xl font-light mb-2 gsap">GEAR UP!</h1>
      <h1 className="md:text-6xl text-4xl font-light mb-2 gsap">
        your IPTV/OTT platform
      </h1>
      <p className="text-gray-300 text-lg mb-6 gsap">in 21 days</p>

      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded gsap">
        <Link to="/meeting">Schedule a meeting</Link>
      </button>
    </div>
  );
}

export default Dashboard;

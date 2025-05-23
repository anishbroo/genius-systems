import { gsap } from "gsap";
import { useEffect } from "react";
import DashboardView from "../dumb/homeSection/dashboardView";

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
    <DashboardView
      className=".gsap"
      title={
        <>
          vU <span className="text-green-500 font-semibold">Gear</span>
        </>
      }
      subtitle="where entertainment meets innovation"
      heading1="GEAR UP!"
      heading2="your IPTV/OTT platform"
      caption="in 21 days"
      buttonText="Schedule a meeting"
      buttonLink="/meeting"
    />
  );
}

export default Dashboard;

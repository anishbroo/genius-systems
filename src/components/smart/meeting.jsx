import { gsap } from "gsap";
import { useEffect } from "react";
import MeetingView from "../dumb/meetingView";

function Meeting() {
  useEffect(() => {
    gsap.set(".form", { opacity: 0 });
    gsap.to(".form", {
      opacity: 1,
      duration: 1,
      delay: 0.3,
      y: 10,
    });
  }, []);

  return <MeetingView />;
}

export default Meeting;

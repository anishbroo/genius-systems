import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import FeaturesView from "../dumb/homeSection/featuresView";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const ProvenSuccessRef = useRef(null);
  const LetsCallRef = useRef(null);
  const EmpowerRef = useRef(null);
  const EmpowerContentRef = useRef(null);

  useEffect(() => {
    const selectors = [".features", ".call", ".empower"];

    selectors.forEach((selector) => {
      gsap.set(selector, { opacity: 0 });
      gsap.to(selector, {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: selector,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <FeaturesView
      heading="Powered by Proven Success"
      caption="Join a thriving community where reliability meets innovation. Our
            platform ensures seamless streaming with exceptional uptime,
            empowering operators to deliver reliable and innovative IPTV/OTT
            solutions to their customers"
      letsCall="Let's get on a call"
      letsCallCaption="Discover how our reliable IPTV/OTT platform can enhance your service
          offerings. Schedule a meeting with us to explore tailored solutions
          that fit your needs."
      buttonText="Schedule a Meeting"
      empowerHeading="Empower your platform with our key features"
      LetsCallRef={LetsCallRef}
      ProvenSuccessRef={ProvenSuccessRef}
      EmpowerRef={EmpowerRef}
      EmpowerContentRef={EmpowerContentRef}
    />
  );
}

export default Features;

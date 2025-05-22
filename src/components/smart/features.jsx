import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import FeaturesView from "../dumb/featuresView";

gsap.registerPlugin(ScrollTrigger);

const featureData = [
  {
    image: "/public/features/cad.png",
    title: "Customized App Development",
    description:
      "Tailor-made applications designed to reflect your brand and enhance user engagement.",
  },
  {
    image: "/public/features/ccl.png",
    title: "Comprehensive Content Library",
    description:
      "Access a vast array of live and on-demand content to captivate your audience.",
  },
  {
    image: "/public/features/mdc.png",
    title: "Multi-Device Compatibility",
    description:
      "Seamlessly stream across various devices, including STBs, smartphones, tablets, and smart TVs.",
  },
  {
    image: "/public/features/fmo.png",
    title: "Flexible Monetization Options",
    description:
      "Diverse revenue models to maximize your earnings and cater to different user preferences",
  },
  {
    image: "/public/features/aad.png",
    title: "Advanced Analytics Dashboard",
    description:
      "Gain valuable insights into user behavior and content performance for data-driven decisions.",
  },
  {
    image: "/public/features/rsf.png",
    title: "Robust Security Features",
    description:
      "Protect your content and users with advanced security measures and encryption.",
  },
  {
    image: "/public/features/rtsle.png",
    title: "Real-Time Streaming and Live Events",
    description:
      "Deliver high-quality live streaming experiences and engage your audience with real-time events.",
  },
  {
    image: "/public/features/si.png",
    title: "Scalable Infrastructure",
    description:
      "Effortlessly expand your service to accommodate growing user demands and content offerings.",
  },
  {
    image: "/public/features/cs.png",
    title: "24/7 Customer Support",
    description:
      "Dedicated support to ensure your operations run smoothly and efficiently, anytime you need help.",
  },
];

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
      heading1="Powered by Proven Success"
      caption1="Join a thriving community where reliability meets innovation. Our
            platform ensures seamless streaming with exceptional uptime,
            empowering operators to deliver reliable and innovative IPTV/OTT
            solutions to their customers"
      heading2="5M+"
      caption2="End Users"
      heading3="150+"
      caption3="Operators and Sub-operators"
      heading4="4+"
      caption4="Global Reach"
      heading5="99.98%"
      caption5="Uptime Reliability"
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
      featureData={featureData}
    />
  );
}

export default Features;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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
    <div className="bg-[#141817] p-8">
      {/* Proven Success */}
      <div
        ref={ProvenSuccessRef}
        className="flex flex-col md:flex-row justify-around features"
      >
        <div className="text-white max-w-lg flex flex-col justify-center p-6">
          <h2 className="text-4xl mb-2">Powered by Proven Success</h2>
          <p className="mb-12">
            Join a thriving community where reliability meets innovation. Our
            platform ensures seamless streaming with exceptional uptime,
            empowering operators to deliver reliable and innovative IPTV/OTT
            solutions to their customers
          </p>
        </div>
        <div className="max-w-xl p-6 bg-[#262626] rounded-xl mb-32">
          <div className="border-b text-center mb-5">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">5M+</h2>
            <p className="text-xl mb-5 text-gray-300">End Users</p>
          </div>
          <div className="border-b text-center mb-5">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">150+</h2>
            <p className="text-xl mb-5 text-gray-300">
              Operators and Sub-operators
            </p>
          </div>
          <div className="border-b text-center mb-5">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">4+</h2>
            <p className="text-xl mb-5 text-gray-300">Global Reach</p>
          </div>
          <div className="text-center">
            <h2 className="text-gray-200 font-bold text-2xl mb-5">99.98%</h2>
            <p className="text-xl mb-5 text-gray-300">Uptime Reliability</p>
          </div>
        </div>
      </div>

      {/* Let's get on a call */}
      <div
        ref={LetsCallRef}
        className="max-w-lg mx-auto px-28 py-12 mb-10 text-center text-4xl bg-[#262626] rounded-xl mb-24 call"
      >
        <h2 className="text-white text-4xl mb-2">Let's get on a call</h2>
        <p className="text-gray-300 text-lg mb-6">
          Discover how our reliable IPTV/OTT platform can enhance your service
          offerings. Schedule a meeting with us to explore tailored solutions
          that fit your needs.
        </p>
        <button className="text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Schedule a Meeting
        </button>
      </div>

      {/* Empower features */}
      <div ref={EmpowerRef} className="container">
        <h2 className="text-white text-center text-4xl font-light mb-8 empower">
          Empower your platform with our key features
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

export default Features;

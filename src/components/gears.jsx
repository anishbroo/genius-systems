import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gears() {
  const TextRef = (useRef < HTMLDivElement) | (null > null);
  const WhoWeAreRef = (useRef < HTMLDivElement) | (null > null);
  const ComponentsRef = (useRef < HTMLDivElement) | (null > null);
  const MottoRef = (useRef < HTMLDivElement) | (null > null);
  const TDBRef = (useRef < HTMLDivElement) | (null > null);
  const CompentencyRef = (useRef < HTMLDivElement) | (null > null);

  useEffect(() => {
    gsap.set(".gears", { opacity: 0 });
    gsap.to(".gears", {
      opacity: 1,
      delay: 0.5,
      duration: 1,
    });

    const refs = [WhoWeAreRef, ComponentsRef, MottoRef, TDBRef, CompentencyRef];

    refs.forEach((ref) => {
      if (ref.current) {
        gsap.set(ref.current, { opacity: 0 });
        gsap.to(ref.current, {
          opacity: 1,
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);

  return (
    <div className="bg-[#141817] py-8">
      {/* Gears section */}
      <div className="flex justify-around mb-8 mt-[68px] gears">
        <img src="/gears/gears.png" className="animate-spin-slow" />
      </div>

      {/* IPTV/OTT Gear Types */}
      <div
        ref={TextRef}
        className="flex items-center justify-evenly text-white text-center gears flex-wrap gap-4"
      >
        {[
          {
            title: "vU",
            desc: "delivers seamless IPTV/OTT streaming",
          },
          {
            title: "iP",
            desc: "provides comprehensive OSS, BSS, and AAA solutions for ISPs",
          },
          {
            title: "Wi",
            desc: "ensures reliable WiFi hotspot management",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-xs">
            <h2 className="border border-white px-2 py-2 text-xl font-light rounded">
              {item.title}{" "}
              <span className="text-green-500 font-semibold">Gear</span>
            </h2>
            <p className="text-sm italic mt-2 mb-4 text-gray-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Who we are */}
      <div ref={WhoWeAreRef} className="text-gray-300 p-8 m-8">
        <h2 className="text-4xl mb-4">Who are we</h2>
        <p>
          Genius Systems PVT. Ltd. (Genius Systems) is a leading software
          development company based in Nepal. Specializing in innovating digital
          products for enterprises, developing community solutions, and
          delivering corporate services over different platforms...
        </p>
      </div>

      {/* Vision / Mission / Core */}
      <div ref={ComponentsRef} className="flex flex-wrap justify-around gap-6">
        {[
          {
            src: "/gears/vision.png",
            title: "Vision",
            text: "Provide quality software solutions to enrich people’s life.",
          },
          {
            src: "/gears/mission.png",
            title: "Mission",
            text: "Innovate Products | Build Strong Bonding with Customers |Engross People with Solutions.",
          },
          {
            src: "/gears/core.png",
            title: "Core Values",
            text: "Think big and innovate | Take ownership and deliver more than promised | Comply with protocols and perform consistently.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="max-w-xs text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6"
          >
            <img src={item.src} />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-200 mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Motto */}
      <div ref={MottoRef} className="text-gray-300 p-8 m-8">
        <h2 className="text-4xl mb-4">THINK . DESIGN . REBUILD</h2>
        <p>
          Committed to the motto to “Think. Design. Build”, Genius Systems will
          adhere to the core values of ownership, innovation, and consistent
          performance...
        </p>
      </div>

      {/* TDB Items */}
      <div ref={TDBRef} className="flex flex-wrap justify-around gap-6">
        {[
          {
            src: "/gears/think.png",
            items: [
              "Purpose",
              "Imagination & Visualization",
              "Apply Expertise",
              "Plan Decision & Persistent",
            ],
          },
          {
            src: "/gears/design.png",
            items: [
              "Concept & Strategy",
              "Requirement & Analysis",
              "Architecture & Design",
              "Road Map",
            ],
          },
          {
            src: "/gears/build.png",
            items: [
              "Specification",
              "Development",
              "Testing",
              "Delivery & Launch",
            ],
          },
        ].map((block, idx) => (
          <div
            key={idx}
            className="max-w-xs w-full text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6"
          >
            <ul className="flex flex-col items-center">
              <img src={block.src} className="mb-4" />
              {block.items.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Our Competency */}
      <div
        ref={CompentencyRef}
        className="flex flex-col lg:flex-row justify-around text-gray-300 p-8 m-8"
      >
        <div className="text-white max-w-lg flex flex-col justify-center p-6">
          <h2 className="text-4xl mb-4">Our Competency</h2>
          <p>
            We use only proven and reliable solutions to ensure a high level of
            security and performance...
          </p>
          <img src="/gears/competency.png" />
        </div>

        <div className="flex flex-col">
          {[
            {
              title: "Teams",
              text: "Our team is hard-working, dedicated, fully motivated, trustworthy, and experienced...",
            },
            {
              title: "Talents",
              text: "Our experience is a combination of thought, feeling, and behavior...",
            },
            {
              title: "Technologies",
              text: "We always use only proven and reliable solutions to ensure a high level of user experience...",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="max-w-xl w-[90%] bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-xl mb-4 p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gears;

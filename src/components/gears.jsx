import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Gears() {
  const TextRef = useRef(null);
  const WhoWeAreRef = useRef(null);
  const ComponentsRef = useRef(null);
  const MottoRef = useRef(null);
  const TDBRef = useRef(null);
  const CompentencyRef = useRef(null);

  useEffect(() => {
    gsap.set(".gears", { opacity: 0 });
    gsap.to(".gears", {
      opacity: 1,
      delay: 0.5,
      duration: 1,
    });

    const selectors = [
      WhoWeAreRef,
      ComponentsRef,
      MottoRef,
      TDBRef,
      CompentencyRef,
    ];

    selectors.forEach((ref) => {
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
    });
  });

  return (
    <>
      <div className="bg-[#141817] py-8">
        {/* Gears section */}
        <div className="flex justify-around mb-8 mt-[68px] gears">
          <img src="/public/gears/gears.png" className="animate-spin-slow" />
        </div>
        <div
          ref={TextRef}
          className="flex items-center justify-evenly text-white text-center gears"
        >
          <div className="flex justify-center items-center flex-col">
            <h2 className="border border-white px-2 py-2 text-xl font-light rounded">
              vU <span className="text-green-500 font-semibold">Gear</span>
            </h2>
            <p className="text-sm italic mt-2 mb-4 text-gray-300">
              delivers seamless IPTV/OTT streaming
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <h2 className="border border-white px-2 py-2 text-xl font-light rounded">
              iP <span className="text-green-500 font-semibold">Gear</span>
            </h2>
            <p className="text-sm italic mt-2 mb-4 text-gray-300">
              provides comprehensive OSS, BSS, and AAA solutions for ISPs
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <h2 className="border border-white px-2 py-2 text-xl font-light rounded">
              Wi <span className="text-green-500 font-semibold">Gear</span>
            </h2>
            <p className="text-sm italic mt-2 mb-4 text-gray-300">
              ensures reliable WiFi hotspot management
            </p>
          </div>
        </div>

        {/* who we are section */}
        <div ref={WhoWeAreRef} className="text-gray-300 p-8 m-8">
          <h2 className="text-4xl mb-4">Who are we</h2>
          <p>
            Genius Systems PVT. Ltd. (Genius Systems) is a leading software
            development company based in Nepal. Specializing in innovating
            digital products for enterprises, developing community solutions and
            delivering corporate services over different platforms, it has
            already established itself by providing the digital solutions to
            scale. The company continues to explore emerging opportunities for
            developing technologies for rendering entertainment, news,
            educational, cultural and productivity contents over different
            digital platforms including mobile (both android and iOS), TVs, web
            and end-user applications.
          </p>
        </div>

        <div
          ref={ComponentsRef}
          className="flex flex-wrap justify-around gap-6"
        >
          <div className="max-w-xs  text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6">
            <img src="/public/gears/vision.png" />
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="text-sm text-gray-200 mt-2">
              Provide quality software solutions to enrich people’s life.
            </p>
          </div>

          <div className="max-w-xs text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6">
            <img src="/public/gears/mission.png" />

            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="text-sm text-gray-200 mt-2">
              Innovate Products | Build Strong Bonding with Customers |Engross
              People with Solutions.
            </p>
          </div>

          <div className="max-w-xs text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6">
            <img src="/public/gears/core.png" />
            <h2 className="text-xl font-semibold">Core Values</h2>
            <p className="text-sm text-gray-200 mt-2">
              Think big and innovate | Take ownership and deliver more than
              promised | Comply with protocols and perform consistently.
            </p>
          </div>
        </div>

        {/* THINK DESIGN REBUILD section */}
        <div ref={MottoRef} className="text-gray-300 p-8 m-8">
          <h2 className="text-4xl mb-4">THINK . DESIGN . REBUILD</h2>
          <p>
            Committed to the motto to “Think. Design. Build”, Genius Systems
            will adhere to the core values of ownership, innovation and
            consistent performance while harnessing the power of innovation to
            thrive on change with our products.
          </p>
        </div>

        {/* Components TDB */}
        <div ref={TDBRef} className="flex flex-wrap justify-around gap-6">
          <div className="max-w-xs w-[100%] text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6">
            <ul className=" flex flex-col items-center">
              <img src="/public/gears/think.png" className="mb-4" />
              <li>Purpose</li>
              <li>Imagination & Visualization</li>
              <li>Apply Expertise</li>
              <li>Plan Decision & Persistant</li>
            </ul>
          </div>

          <div className="max-w-xs w-[100%] text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6">
            <ul className=" flex flex-col items-center">
              <img src="/public/gears/design.png" className="mb-4" />
              <li>Concept & Strategy</li>
              <li>Requirement & Analysis</li>
              <li>Architecture & Design</li>
              <li>Road Map</li>
            </ul>
          </div>

          <div className="max-w-xs w-[100%] text-white bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl p-6">
            <ul className=" flex flex-col items-center">
              <img src="/public/gears/build.png" className="mb-4" />
              <li>Specification</li>
              <li>Development</li>
              <li>Testing</li>
              <li>Delivery & Launch</li>
            </ul>
          </div>
        </div>

        {/* Our Competency */}
        <div
          ref={CompentencyRef}
          className="flex flex-col lg:flex-row justify-around text-gray-300 p-8 m-8"
        >
          <div className="text-white max-w-lg flex flex-col justify-center p-6">
            <h2 className="text-4xl mb-4">Our Competency</h2>
            <p>
              We use only proven and reliable solutions to ensure a high level
              of security and performance. We use the latest technology and take
              great care to update systems and platforms used by our customers.
            </p>
            <img src="/public/gears/competency.png" />
          </div>
          <div className="flex flex-col">
            <div className="max-w-xl  w-[90%]  bg-[#262626] rounded-xl mb-4">
              <div className="text-gray-300bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl  p-6">
                <h2 className="text-2xl font-semibold mb-2">Teams</h2>
                <p>
                  Our team is a hard-working, dedicated, fully motivated,
                  trustworthy, and experienced professionals steaming with
                  like-minded individuals with an ability to respond to
                  adversity. Striving forward into new innovation with latest
                  technologies to deliver excellence with a profound commitment
                  to succeed.
                </p>
              </div>
            </div>

            <div className="max-w-xl w-[90%] bg-[#262626] rounded-xl mb-4">
              <div className="text-gray-300   bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl  p-6">
                <h2 className="text-2xl font-semibold mb-2">Talents</h2>
                <p>
                  Our experience is a combination of thought, feeling, and
                  behavior. We have experienced designers and engineers, Scrum
                  masters and Agility coaches, full-stack architects,
                  machine-learning engineers, and DevOps team working together
                  to meet the company’s vision, mission, and goals.
                </p>
              </div>
            </div>

            <div className="max-w-xl w-[90%] bg-[#262626] rounded-xl mb-4">
              <div className="text-gray-300 bg-[#262626] hover:bg-gray-600 hover:animate-pulse cursor-pointer rounded-2xl  p-6">
                <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                <p>
                  We always use only the proven and reliable solutions to ensure
                  a high level of user experience, constant up-to-date security,
                  and performance by using the new and latest technology, by
                  taking the case of updated systems and platforms used by our
                  customers in Nepal as well as outside of the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gears;

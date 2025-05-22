import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GearsView from "../dumb/gearsView";

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
    <GearsView
      TextRef={TextRef}
      WhoWeAreRef={WhoWeAreRef}
      ComponentsRef={ComponentsRef}
      MottoRef={MottoRef}
      TDBRef={TDBRef}
      CompentencyRef={CompentencyRef}
    />
  );
}

export default Gears;

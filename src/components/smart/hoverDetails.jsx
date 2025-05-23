import { useEffect, useRef, useState } from "react";
import HoverDetailsView from "../dumb/homeSection/hoverDetailsView";

const cardData = [
  {
    image: "public/hover/mds.png",
    title: "Multi Device Screening",
    description:
      "Offer your users a seamless experience across multiple devices. STB, Smart TV's, Smartphones, tablets and web browsers with smooth transitions and no interruptions.",
  },
  {
    image: "/public/hover/cfm.png",
    title: "Choose Flexible Monetization",
    description:
      "Unlock diverse revenue streams with our flexible monetization options.",
  },
  {
    image: "/public/hover/iptv.png",
    title: "Operate IPTV with/without STB",
    description:
      "Delivers seamless IPTV services directly to your user's device, whether through cost-effective app based experience on smart TV's.",
  },
  {
    image: "/public/hover/wls.png",
    title: "White-Label Solutions",
    description:
      "Provides a fully customizable white-label platforms that allows your brand to take center stage",
  },
  {
    image: "/public/hover/tms.png",
    title: "TMS and Analytics",
    description:
      "Leverage powerful Terminal Management System and real time analytics to monitor performance.",
  },

  {
    image: "/public/hover/cst.png",
    title: "Customer Support Tools",
    description:
      "Improves customer satisfaction with integrated support features such as ticketing systems etc.",
  },
  {
    image: "/public/hover/hau.png",
    title: "High Availability and Uptime",
    description:
      "Ensures reliable service delivery with high availability architecture.",
  },
  {
    image: "/public/hover/ecm.png",
    title: "Effortless Content Management",
    description:
      "Easily manage and organize content with an intuitive Content Management System.",
  },
];

function HoverDetails() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollSpeed = 0.5;
    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
    }, 20);

    return () => clearInterval(interval);
  });

  return (
    <HoverDetailsView
      cardData={cardData}
      scrollRef={scrollRef}
      hoveredIndex={hoveredIndex}
      setHoveredIndex={setHoveredIndex}
    />
  );
}

export default HoverDetails;

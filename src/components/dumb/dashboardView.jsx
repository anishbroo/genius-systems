import { Link } from "react-router-dom";

function DashboardView({
  title,
  subtitle,
  heading1,
  heading2,
  caption,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-black text-white px-4 text-center">
      <h2
        className={`border border-white px-2 py-2 text-xl font-light rounded gsap`}
      >
        {title}
      </h2>
      <p className="text-sm italic mt-2 mb-4 text-gray-300 gsap">{subtitle}</p>

      <h1 className="md:text-6xl text-4xl font-light mb-2 gsap">{heading1}</h1>
      <h1 className="md:text-6xl text-4xl font-light mb-2 gsap">{heading2}</h1>
      <p className="text-gray-300 text-lg mb-6 gsap">{caption}</p>

      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded gsap">
        <Link to={buttonLink}>{buttonText}</Link>
      </button>
    </div>
  );
}

export default DashboardView;

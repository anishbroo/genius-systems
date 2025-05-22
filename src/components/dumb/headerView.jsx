import { Link } from "react-router-dom";

function HeaderView({ isOpen, setIsOpen }) {
  return (
    <header className="px-6 py-4 bg-black text-white border-gray border-1 border-b sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 rounded px-3 py-1 cursor-pointer">
          <Link to="/">
            <img src="public/imagee.png" className="h-8 w-8" />
          </Link>
          <Link to="/">
            <h2 className="text-white text-xl">
              <span className="font-bold">GENIUS</span> | SYSTEMS
            </h2>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link
            className="text-white text-xl hover:font-bold cursor-pointer"
            to="/"
          >
            Home
          </Link>

          <Link
            to="/gears"
            className="text-white text-xl hover:font-bold cursor-pointer"
          >
            Gears
          </Link>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            <Link to="/meeting">Schedule a Meeting</Link>
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-gray-700 flex flex-col items-center md:hidden py-4 z-40">
            <Link
              to="/"
              className="py-2 text-lg hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gears"
              className="py-2 text-lg hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Gears
            </Link>
            <Link
              to="/meeting"
              className="py-2 text-lg hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Schedule a Meeting
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderView;

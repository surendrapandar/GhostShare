import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const Buttons = [
    ["HomePage", "/"],
    ["CreateRoom", "/create-room"],
    ["ShowRoom", "/show-room"],
    ["💡Feedback", "https://insigh.to/b/ghost-share"],
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">GhostShare</div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="text-sm lg:flex-grow lg:text-right">
              {Buttons.map(([text, path]) => (
                <Button
                  key={text}
                  className="block mt-4 lg:inline-block lg:mt-0 bg-purple-600 hover:bg-purple-700 ml-4"
                >
                  <Link to={path} target={text == "💡Feedback" ? "_blank" : ""}>
                    {text}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

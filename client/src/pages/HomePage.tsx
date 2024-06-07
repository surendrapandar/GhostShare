import GhostShareWorking from "@/components/GhostShareWorking";
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          <button className="px-6 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg">
            <Link to="/create-room">Create Room</Link>
          </button>
          <button className="px-6 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg">
            <Link to="/show-room">Show Room</Link>
          </button>
        </div>
      </div>
      <GhostShareWorking />
    </>
  );
}

export default HomePage;

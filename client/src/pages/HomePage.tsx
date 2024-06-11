import GhostShareWorking from "@/components/GhostShareWorking";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-800 text-white">
        <GhostShareWorking />
        <div className="flex justify-center">
          <Button className="block mb-4 lg:inline-block lg:mt-0 bg-red-600 hover:bg-red-700">
            <Link to="/create-room">Click here to start</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomePage;

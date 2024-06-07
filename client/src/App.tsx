import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateRoomPage from "./pages/CreateRoomPage";
import ShowRoomPage from "./pages/ShowRoomPage";
import FeedbackPage from "./pages/FeedbackPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-room" element={<CreateRoomPage />} />
      <Route path="/show-room" element={<ShowRoomPage />} />
      //rotue for feedback
      <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  );
};

export default App;

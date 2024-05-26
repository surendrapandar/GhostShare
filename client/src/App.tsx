import { Route, Routes } from "react-router-dom";
import TextInputDiv from "./components/TextInputDiv";
import NoteViewer from "./components/NoteViewer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TextInputDiv />} />
      <Route path="/notes/:accessKey" element={<NoteViewer />} />
    </Routes>
  );
};

export default App;

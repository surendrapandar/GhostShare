import React from "react";
import { Button } from "./ui/button";
import { saveNoteApi } from "../api/notes/notes.api";
import { toast } from "sonner";
import { Input } from "./ui/input";

const NoteEditor: React.FC = () => {
  const [note, setNote] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [roomNo, setRoomNo] = React.useState<string>("");

  const handleSaveButtonClick = async () => {
    console.log(note, password, roomNo);
    const noteInfo = {
      content: note,
      password: password,
      roomNo: roomNo,
    };
    await saveNoteApi(noteInfo);
    toast.success("Note saved successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Write Your Note
        </h1>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Type your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <div className="mt-5">
          <div className="mt-5 mb-5">
            <Input
              className="mb-5"
              type="number"
              placeholder="Write Your Room No."
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Write Your Room Password."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            className=" bg-purple-600 hover:bg-purple-700 min-w-20"
            onClick={() => handleSaveButtonClick()}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;

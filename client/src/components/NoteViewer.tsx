import { fetchNoteApi } from "@/api/notes/notes.api";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NoteViewer: React.FC = () => {
  const [content, setContent] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [roomNo, setRoomNo] = React.useState<string>("");

  const handleFindNote = async () => {
    const data = await fetchNoteApi(roomNo, password);
    setContent(data[0].content);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w w-full m-12 space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Find Your Shared Notes
          </h2>
          {content && (
            <div className="bg-white p-5 rounded-xl m-5 ">
              <p className="text-black">
                {content.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          )}

          <div className="mt-5 flex flex-col">
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
              onClick={handleFindNote}
            >
              Find Note
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteViewer;

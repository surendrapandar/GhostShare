import React from "react";
import { Button } from "./ui/button";
import { saveNoteApi } from "../api/notes/notes.api";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { FiEye, FiEyeOff } from "react-icons/fi";

const NoteEditor: React.FC = () => {
  const [note, setNote] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [roomNo, setRoomNo] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSaveButtonClick = async () => {
    setLoading(true);
    console.log(note, password, roomNo);
    const noteInfo = {
      content: note,
      password: password,
      roomNo: roomNo,
    };
    try {
      const res = await saveNoteApi(noteInfo);
      console.log(res.statusCode === 200);
      if (res.statusCode === 200) {
        toast.success("Room saved successfully");
        setNote("");
        setPassword("");
        setRoomNo("");
      } else if (res.statusCode == 400) {
        toast.info("Room already exists, please try another room number.");
      } else {
        toast.error("Failed to save room");
      }
    } catch (error) {
      toast.error("Faild to save room");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-4  ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Write Your Note
        </h1>
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent text-black"
          placeholder="Type your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <div className="mt-5">
          <div className="mt-5 mb-5 text-black">
            <Input
              className="mb-5"
              type="number"
              placeholder="Write Your Room No."
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            />
            <div className="relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                placeholder="Write Your Room Password."
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10" // Adjust padding to not overlap the eye icon
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <Button
            className=" bg-red-600 hover:bg-red-700 min-w-20"
            onClick={() => handleSaveButtonClick()}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;

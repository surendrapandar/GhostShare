import { fetchNoteApi } from "@/api/notes/notes.api";
import React from "react";
import { useParams } from "react-router-dom";

const NoteViewer: React.FC = () => {
  const { accessKey } = useParams<{ accessKey: string }>();
  const [note, setNote] = React.useState<string>("");

  React.useEffect(() => {
    const fetchNote = async () => {
      const res = await fetchNoteApi(accessKey);
      setNote(res.content);
    };
    fetchNote();
  }, [accessKey]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w w-full m-12 space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Shared Notes
          </h2>
        </div>
        <div className="bg-pink-200 p-6 rounded-md shadow-2xl">
          <p className="text-lg text-black">
            {note.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteViewer;

type Note = {
  content: string;
  password: string;
  roomNo: string;
};

export const saveNoteApi = async (noteInfo: Note) => {
  console.log(import.meta.env.VITE_NOTE_BACKEND_API_URL);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_NOTE_BACKEND_API_URL}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteInfo),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNoteApi = async (roomNo: string, password: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/notes/?roomNo=${roomNo}&password=${password}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

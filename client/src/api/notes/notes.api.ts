type Note = {
  content: string;
};

export const saveNoteApi = async (note: Note) => {
  try {
    const response = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNoteApi = async (accessKey: any) => {
  try {
    const response = await fetch(`http://localhost:3000/notes/${accessKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

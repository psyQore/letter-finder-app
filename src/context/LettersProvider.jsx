import { useState, createContext } from "react";
import axios from "axios";

const LettersContetx = createContext();

const LettersProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [lyric, setLyric] = useState("");
  const [loading, setLoading] = useState(false);

  const searchLetter = async (search) => {
    // console.log(search)

    const { artist, song } = search;
    setLoading(true);
    try {
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const { data } = await axios(url);
      setLyric(data.lyrics);
      setAlert("");
    } catch (error) {
      setAlert("Canción No Encontrada");
    }
    setLoading(false);
  };

  return (
    <LettersContetx.Provider
      value={{
        alert,
        setAlert,
        searchLetter,
        lyric,
        loading,
        setLoading,
        setLyric,
      }}
    >
      {children}
    </LettersContetx.Provider>
  );
};

export { LettersProvider };

export default LettersContetx;

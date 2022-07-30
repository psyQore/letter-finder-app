import { useState, createContext } from "react";
import axios from "axios";

const LettersContetx = createContext();

const LettersProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [lyrics, setLyrics] = useState("");

  const searchLetter = async (search) => {
    // console.log(search)

    const { artist, song } = search;
    try {
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const { data } = await axios(url);

      setLyrics(data.lyrycs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LettersContetx.Provider
      value={{
        alert,
        setAlert,
        searchLetter,
      }}
    >
      {children}
    </LettersContetx.Provider>
  );
};

export { LettersProvider };

export default LettersContetx;

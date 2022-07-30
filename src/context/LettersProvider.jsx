import { useState, createContext } from "react";

const LettersContetx = createContext();

const LettersProvider = ({ children }) => {
  const [alert, setAlert] = useState("");

  return (
    <LettersContetx.Provider value={{ alert, setAlert }}>
      {children}
    </LettersContetx.Provider>
  );
};

export { LettersProvider };

export default LettersContetx;

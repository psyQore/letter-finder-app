import { useContext } from "react";
import LettersContetx from "../context/LettersProvider";

const useLetters = () => {
  return useContext(LettersContetx);
};

export default useLetters;

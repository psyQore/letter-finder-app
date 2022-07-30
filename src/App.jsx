import { useState } from "react";
import AppLetters from "./components/AppLetters";
import { LettersProvider } from "./context/LettersProvider";

function App() {
  return (
    <LettersProvider>
      <AppLetters />
    </LettersProvider>
  );
}

export default App;

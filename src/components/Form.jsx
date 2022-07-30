import { useState } from "react";
import useLetters from "../hooks/useLetters";
import "../styles/Button.css"

const Form = () => {
  const { setAlert, searchLetter, setLyric} = useLetters();

  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Coloca nombre de artista y canción");
      return;
    }

    searchLetter(search)
    setAlert("");
    
  };

  const cleanSearch = () => {
    setSearch({
        artist: "",
        song: ""
    })
    setLyric("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por artistas y cancion</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artist"
            placeholder="Nombre Artista"
            value={search.artist}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Cancion</label>
          <input
            type="text"
            name="song"
            placeholder="Nombre Canción"
            value={search.song}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="buscar" />
      </div>
        <button className="cleanButton" onClick={cleanSearch}>Limpiar</button>
    </form>
  );
};

export default Form;

import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });

  const handleSubmit = () => {};

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
    </form>
  );
};

export default Form;

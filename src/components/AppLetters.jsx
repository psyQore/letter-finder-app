import Form from "./Form";
import useLetters from "../hooks/useLetters";
import Alert from "./Alert";
import Lyrics from "./Lyrics";
import Spinner from "./Spinner";

const AppLetters = () => {
  const { alert, lyric, loading } = useLetters();

  return (
    <>
      <header>Letter Finder App</header>

      <Form />

      <main>
        {alert ? (
          <Alert>{alert}</Alert>
        ) : lyric ? (
          <Lyrics />
        ) : loading ? (
          <Spinner/>
        ) : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetters;

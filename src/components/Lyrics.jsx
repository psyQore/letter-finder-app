import useLetters from "../hooks/useLetters"

const Lyrics = () => {

    const { lyric } = useLetters();

  return (
    <div className="letra">{lyric}</div>
  )
}

export default Lyrics
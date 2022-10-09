import { useNavigate } from 'react-router-dom';
import Poster from './style';

export default function FilmPoster({ originalId, posterUrl, title }) {
  const navigate = useNavigate();

  return (
    <Poster
      onClick={() =>
        navigate(`/films/${originalId}`, { state: { originalId } })
      }
    >
      <img src={posterUrl} alt={title} />
    </Poster>
  );
}

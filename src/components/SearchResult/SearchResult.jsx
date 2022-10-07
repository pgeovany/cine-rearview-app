import { useNavigate } from 'react-router-dom';
import { SearchResultContainer, FilmPoster } from './style';

export default function SearchResult({
  originalId,
  title,
  poster,
  releaseDate,
}) {
  const navigate = useNavigate();
  const year = releaseDate.split('/')[2];

  return (
    <SearchResultContainer
      onClick={() =>
        navigate(`/films/${originalId}`, { state: { originalId } })
      }
    >
      <FilmPoster src={poster} alt="" />
      <h1>
        {title} {year ? `(${year})` : null}
      </h1>
    </SearchResultContainer>
  );
}

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Poster, DeleteDiv } from './style';

export default function FilmPoster({
  id,
  originalId,
  posterUrl,
  title,
  removeFilm,
}) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  async function handleDeleteRequest(e) {
    e.stopPropagation();
    if (
      window.confirm('Do you really want to remove this film from your list?')
    ) {
      await removeFilm(id);
    }
  }

  return (
    <Poster
      onClick={() =>
        navigate(`/films/${originalId}`, { state: { originalId } })
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTapHold={handleMouseOver}
    >
      <img src={posterUrl} alt={title} />
      {isHovering ? (
        <DeleteDiv
          onClick={(e) => {
            handleDeleteRequest(e);
          }}
        >
          Delete
        </DeleteDiv>
      ) : null}
    </Poster>
  );
}

import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HorizontalBorder from '../../styles/HorizontalBorder';
import {
  Main,
  Header,
  Poster,
  Title,
  Overview,
  ButtonContainer,
  Button,
} from './style';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

export default function FilmDetails() {
  const { state } = useLocation();
  const { userInfo } = useContext(UserContext);
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token || ''}`,
      },
    };

    async function fetchData() {
      try {
        const { data } = await api.get(
          `/films/details/${state.originalId}`,
          config
        );
        setFilm(data);
        console.log(data);
      } catch (error) {
        console.log(error?.response?.data);
      }
    }

    fetchData();
  }, []);

  async function addFilmToList(list) {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token || ''}`,
      },
    };

    const body = {
      originalId: film.originalId,
      title: film.title,
      overview: film.overview,
      releaseDate: film.releaseDate,
      posterUrl: film.poster,
    };

    try {
      await api.post(`${list}`, body, config);
      alert('Added to your list!');
    } catch (error) {
      alert(error?.response?.data);
    }
  }

  function genDetailsPage() {
    if (film) {
      return (
        <>
          <Header>
            <Poster src={film.poster} />
            <div>
              <Title>{film.title}</Title>
              <br />
              <h2>
                DIRECTED BY <br />
                <span>
                  {film?.directors?.map((director) => director).join(', ')}
                </span>
              </h2>
              <br />
              <h2>Release date: {film.releaseDate}</h2>
              <br />
              <h2>Runtime: {film.runtime} min</h2>
              <br />
              <h2>
                Genres: {film?.genres?.map((genre) => genre.name).join(', ')}
              </h2>
            </div>
          </Header>
          <br />
          <HorizontalBorder />
          <br />
          <Overview>
            OVERVIEW: <br />
            {film.overview}
          </Overview>
          <br />
          <HorizontalBorder />
          <br />
          <ButtonContainer>
            <Button onClick={() => addFilmToList('userlist')}>Watched!</Button>
            <Button onClick={() => addFilmToList('watchlist')}>
              Add to watchlist!
            </Button>
          </ButtonContainer>
        </>
      );
    }
    return null;
  }

  return <Main>{genDetailsPage()}</Main>;
}

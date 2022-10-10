import { useState, useEffect, useContext } from 'react';
import { Header, Main } from './style';
import FilmPoster from '../../components/FilmPoster/FilmPoster';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';
import errorAlert from '../../utils/CustomAlerts/errorAlert';
import successAlert from '../../utils/CustomAlerts/successAlert';

export default function Watchlist() {
  const [films, setFilms] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [updateList, setUpdateList] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token || ''}`,
      },
    };

    async function fetchData() {
      try {
        const { data } = await api.get('/watchlist', config);
        setFilms(data);
      } catch (error) {
        console.log(error?.response?.data); // eslint-disable-line
      }
    }

    fetchData();
  }, [updateList]);

  async function removeFilm(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token || ''}`,
      },
    };

    try {
      await api.delete(`watchlist/${id}`, config);
      successAlert('Film successfully deleted from your watchlist!');
      setUpdateList(!updateList);
    } catch (error) {
      errorAlert(error?.response?.data);
    }
  }

  function genUserWatchlist() {
    if (userInfo && films) {
      return (
        <>
          <Header>{`My watchlist (${films.length})`}</Header>
          <Main>
            {films.map((film) => (
              <FilmPoster
                key={film.id}
                id={film.id}
                originalId={film.originalId}
                posterUrl={film.posterUrl}
                title={film.title}
                removeFilm={removeFilm}
              />
            ))}
          </Main>
        </>
      );
    }
    return (
      <>
        <Header>Loading</Header>
        <Main>loading</Main>
      </>
    );
  }

  return <>{genUserWatchlist()}</>;
}

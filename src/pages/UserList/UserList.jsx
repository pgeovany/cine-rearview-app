import { useState, useEffect, useContext } from 'react';
import { EmptyMessage, Header, Main } from './style';
import FilmPoster from '../../components/FilmPoster/FilmPoster';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';
import errorAlert from '../../utils/CustomAlerts/errorAlert';
import successAlert from '../../utils/CustomAlerts/successAlert';
import Loader from '../../components/Loader/Loader';

export default function UserList() {
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
        const { data } = await api.get('/userlist', config);
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
      await api.delete(`userlist/${id}`, config);
      setUpdateList(!updateList);
      successAlert('Film successfully deleted from your list!');
    } catch (error) {
      errorAlert(error?.response?.data);
    }
  }

  function genUserList() {
    if (films && films.length > 0) {
      return (
        <>
          <Header>{`My films (${films.length})`}</Header>
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
    if (films && films.length === 0) {
      return (
        <>
          <Header>{`My films (${films.length})`}</Header>
          <EmptyMessage>
            <p>Oh, your list is empty :(</p>
            <br />
            <p>Go to the search page</p>
            <p>and search for new films!</p>
          </EmptyMessage>
        </>
      );
    }

    return (
      <>
        <Header>Loading...</Header>
        <Loader />
      </>
    );
  }

  return <>{genUserList()}</>;
}

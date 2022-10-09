import { useState, useEffect, useContext } from 'react';
import { Header, Main } from './style';
import FilmPoster from '../../components/FilmPoster/FilmPoster';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';

export default function UserList() {
  const [films, setFilms] = useState(null);
  const { userInfo } = useContext(UserContext);

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
        console.log(error?.response?.data);
      }
    }

    fetchData();
  }, []);

  function genUserList() {
    if (userInfo && films) {
      return (
        <>
          <Header>{`My films (${films.length})`}</Header>
          <Main>
            {films.map((film) => (
              <FilmPoster
                key={film.id}
                originalId={film.originalId}
                posterUrl={film.posterUrl}
                title={film.title}
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

  return <>{genUserList()}</>;
}

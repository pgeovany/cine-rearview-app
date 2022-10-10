import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import {
  SearchBarContainer,
  SearchBar,
  Main,
  SearchResultsContainer,
} from './style';
import SearchResult from '../../components/SearchResult/SearchResult';
import api from '../../services/api';

export default function Search() {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState(null);
  const { userInfo } = useContext(UserContext);

  async function handleChange(e) {
    const film = e.target.value;
    setSearch(film);

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token || ''}`,
      },
      params: {
        search: film,
      },
    };

    try {
      const { data } = await api.get('/films/search', config);
      setFilms(data);
    } catch (error) {
      console.log(error?.response?.data); // eslint-disable-line
    }
  }

  return (
    <>
      <SearchBarContainer>
        <SearchBar
          placeholder="Search for films"
          type="text"
          value={search}
          debounceTimeout={300}
          onChange={handleChange}
        />
      </SearchBarContainer>
      <Main>
        <SearchResultsContainer>
          {films?.map((film) => (
            <SearchResult
              key={film.originalId}
              originalId={film.originalId}
              title={film.title}
              poster={film.poster}
              releaseDate={film.releaseDate}
            />
          ))}
        </SearchResultsContainer>
      </Main>
    </>
  );
}

import styled from 'styled-components';

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 130px;
  width: 100%;
  border-bottom: 1px solid #353536;

  h1 {
    color: white;
    font-size: 18px;
  }
`;

const FilmPoster = styled.img`
  padding-right: 10px;
  height: 100px;
  width: 80px;
  float: left;
  object-fit: cover;
`;

export { SearchResultContainer, FilmPoster };

import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

const SearchBarContainer = styled.div`
  padding: 0 20px 0 20px;
  width: 100%;
  height: 70px;
  background-color: #141414;
  border-bottom: 1px solid #353536;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const SearchBar = styled(DebounceInput)`
  height: 36px;
  width: inherit;
  border-radius: 8px;
  background-color: #353536;
  border: none;
  padding-left: 10px;
  font-size: 18px;
  color: white;
  &&:focus {
    outline: none;
  }
  ::placeholder {
    color: #c5c5c7;
  }
`;

const Main = styled.div`
  margin-top: 80px;
  margin-bottom: 59px;
  height: 100%;
  width: 100%;
  padding: 0 20px 0 20px;
`;

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export { SearchBarContainer, SearchBar, Main, SearchResultsContainer };

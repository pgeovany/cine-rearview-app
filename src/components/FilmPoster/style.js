import styled from 'styled-components';

const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
  background-color: #353536;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 90%;
    height: 92%;
  }

  img:hover {
    filter: brightness(110%);
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Poster;

import styled from 'styled-components';
import { Finger } from 'react-finger';

const Poster = styled(Finger('div'))`
  display: flex;
  justify-content: center;
  position: relative;
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

const DeleteDiv = styled.div`
  height: 26px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e01f36;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

export { Poster, DeleteDiv };

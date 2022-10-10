import styled from 'styled-components';
import BaseButton from '../../styles/auth/Button';

const Main = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 0 20px 0 20px;
`;

const Header = styled.div`
  height: auto;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: white;
    font-size: 18px;
  }

  span {
    font-weight: bold;
  }
`;

const Poster = styled.img`
  width: 100px;
  height: 150px;
  float: right;
`;

const Title = styled.h1`
  color: white;
  font-size: 26px;
`;

const Overview = styled.div`
  color: white;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled(BaseButton)`
  width: 40%;
`;

export { Main, Header, Poster, Title, Overview, ButtonContainer, Button };

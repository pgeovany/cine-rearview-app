import styled from 'styled-components';

const Header = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #141414;
  border-bottom: 1px solid #353536;
  font-size: 26px;
  color: white;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Main = styled.div`
  padding: 0 20px 0 20px;
  width: 100%;
  margin-bottom: 70px;
  margin-top: 70px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export { Header, Main };

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 60px;
  color: #9fa4b3;
  width: 100%;
  background-color: #1b1c1f;
  border-top: 1px solid #292a2e;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.displayingPage ? '#e01f36' : 'inherit')};

  p {
    padding-top: 8px;
    color: inherit;
    font-weight: bold;
  }
`;

export { Container, IconContainer };

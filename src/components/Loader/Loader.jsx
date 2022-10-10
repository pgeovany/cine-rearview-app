import { Oval } from 'react-loader-spinner';
import Container from './style';

export default function Loader() {
  return (
    <Container>
      <Oval
        height={100}
        width={100}
        color="#959596"
        wrapperStyle={{}}
        wrapperClass=""
        ariaLabel="oval-loading"
        secondaryColor="#959596"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Container>
  );
}

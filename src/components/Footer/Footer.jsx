import { useLocation, Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { BsFilm } from 'react-icons/bs';
import { FiEye, FiBookOpen } from 'react-icons/fi';
import { Container, IconContainer } from './style';

export default function Footer() {
  const location = useLocation().pathname;
  const render = location !== '/sign-up' && location !== '/';

  function genFooter() {
    if (render) {
      return (
        <Container>
          <Link to="/reviews">
            <IconContainer displayingPage={location === '/reviews'}>
              <FiBookOpen size={22} />
              <p>Reviews</p>
            </IconContainer>
          </Link>
          <Link to="/watchlist">
            <IconContainer displayingPage={location === '/watchlist'}>
              <FiEye size={26} />
              <p>Watchlist</p>
            </IconContainer>
          </Link>
          <Link to="my-list">
            <IconContainer displayingPage={location === '/my-list'}>
              <BsFilm size={22} />
              <p>My Films</p>
            </IconContainer>
          </Link>
          <Link to="/search">
            <IconContainer displayingPage={location === '/search'}>
              <GoSearch size={22} />
              <p>Search</p>
            </IconContainer>
          </Link>
        </Container>
      );
    }
    return null;
  }
  return <>{genFooter()}</>;
}

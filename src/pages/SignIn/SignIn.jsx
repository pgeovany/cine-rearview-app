import { Link } from 'react-router-dom';
import Container from '../../styles/auth/Container';
import Title from '../../styles/auth/Title';
import SignInForm from '../../components/SignInForm/SignInForm';
import StyledLink from '../../styles/auth/StyledLink';
import Logo from '../../styles/Logo';
import logo from '../../assets/images/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Logo src={logo} />
      <Title>Cine Rearview</Title>
      <SignInForm />
      <Link to="/sign-up">
        <StyledLink>{`Don't have an account yet? Sign up!`}</StyledLink>
      </Link>
    </Container>
  );
}

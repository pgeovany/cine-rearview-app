import { Link } from 'react-router-dom';
import Container from '../../styles/auth/Container';
import Title from '../../styles/auth/Title';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import StyledLink from '../../styles/auth/StyledLink';
import Logo from '../../styles/Logo';
import logo from '../../assets/images/logo.png';

export default function SignUp() {
  return (
    <Container>
      <Logo src={logo} />
      <Title>Cine Rearview</Title>
      <SignUpForm />
      <Link to="/">
        <StyledLink>Already registered? Sign in!</StyledLink>
      </Link>
    </Container>
  );
}

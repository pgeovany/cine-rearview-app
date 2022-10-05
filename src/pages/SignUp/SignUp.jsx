import { Link } from 'react-router-dom';
import Container from '../../styles/auth/Container';
import Title from '../../styles/auth/Title';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import StyledLink from '../../styles/auth/StyledLink';

export default function SignUp() {
  return (
    <Container>
      <Title>Cine Rearview</Title>
      <SignUpForm />
      <Link to="/">
        <StyledLink>Already registered? Sign in!</StyledLink>
      </Link>
    </Container>
  );
}

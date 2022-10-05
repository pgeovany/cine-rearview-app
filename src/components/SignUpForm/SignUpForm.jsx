import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Form from '../../styles/auth/Form';
import Input from '../../styles/auth/Input';
import Button from '../../styles/auth/Button';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disableButton] = useState(false);

  return (
    <Form>
      <label htmlFor="username">Username</label>
      <Input
        id="username"
        required
        disabled={disableButton}
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="email">E-mail</label>
      <Input
        id="email"
        required
        disabled={disableButton}
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <Input
        id="password"
        required
        disabled={disableButton}
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <Input
        id="confirmPassword"
        required
        disabled={disableButton}
        value={confirmPassword}
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <Button type="submit" disabled={disableButton}>
        {disableButton ? <ThreeDots color="white" /> : 'Sign up'}
      </Button>
    </Form>
  );
}

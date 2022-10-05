import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Form from '../../styles/auth/Form';
import Input from '../../styles/auth/Input';
import Button from '../../styles/auth/Button';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton] = useState(false);

  return (
    <Form>
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
      <Button type="submit" disabled={disableButton}>
        {disableButton ? <ThreeDots color="white" /> : 'Login'}
      </Button>
    </Form>
  );
}

'use client';
import { FormEvent, useContext, useRef, useState } from 'react';
import Link from '@mui/material/Link';
import { Input } from '@/components/Input';
import FormLabel from '@mui/material/FormLabel';
import AuthForm from '@/containers/auth/AuthForm';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import { AuthContext } from '@/providers/AuthProvider';
import { IRequestError } from '@/types';

const SignUpForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signup } = useContext(AuthContext);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  const validateInputs = () => {
    const name = nameRef.current as HTMLInputElement;
    const email = emailRef.current as HTMLInputElement;
    const password = passwordRef.current as HTMLInputElement;

    const nameValue = name?.value || '';
    const emailValue = email?.value || '';
    const passwordValue = password?.value || '';

    let isValid = true;

    if (!nameValue || nameValue.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!passwordValue || passwordValue.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateInputs()) return;
    setFormLoading(true);
    const data = new FormData(event.currentTarget);
    const userData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      const response = await signup(userData);
      setFormLoading(false);
    } catch (error: unknown) {
      const err = error as IRequestError;
      setFormErrorMessage(err.data.message);
      setFormLoading(false);
    }
  };

  return (
    <AuthForm
      formLoading={formLoading}
      formErrorMessage={formErrorMessage}
      title={'Sign up'}
      handleSubmit={handleSubmit}
      formFooter={
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <span>
            <Link
              href="/auth/signin"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign in
            </Link>
          </span>
        </Typography>
      }
    >
      <FormControl>
        <FormLabel htmlFor="name">Full name</FormLabel>
        <Input
          autoFocus
          ref={nameRef}
          autoComplete="name"
          name="name"
          required
          fullWidth
          id="name"
          placeholder="Jon Snow"
          error={nameError}
          helperText={nameErrorMessage}
          color={nameError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          ref={emailRef}
          error={emailError}
          helperText={emailErrorMessage}
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          required
          fullWidth
          variant="outlined"
          color={emailError ? 'error' : 'primary'}
          sx={{ ariaLabel: 'email' }}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Password</FormLabel>
        <Input
          ref={passwordRef}
          error={passwordError}
          helperText={passwordErrorMessage}
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoComplete="current-password"
          autoFocus
          required
          fullWidth
          variant="outlined"
          color={passwordError ? 'error' : 'primary'}
          sx={{ ariaLabel: 'password' }}
        />
      </FormControl>
    </AuthForm>
  );
};

export default SignUpForm;

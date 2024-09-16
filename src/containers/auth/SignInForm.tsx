'use client';
import * as React from 'react';
import { FormEvent, useContext, useRef, useState } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Input } from '@/components/Input';
import Link from '@mui/material/Link';
import AuthForm from '@/containers/auth/AuthForm';
import { IRequestError } from '@/types';

const SignInForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { signIn } = useContext(AuthContext);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  const validateInputs = () => {
    const email = emailRef.current as HTMLInputElement;
    const password = passwordRef.current as HTMLInputElement;
    const emailValue = email?.value || '';
    const passwordValue = password?.value || '';

    let isValid = true;

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
      email: data.get('email'),
      password: data.get('password'),
    };
    try {
      const response = await signIn(userData);
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
      title={'Sign in'}
      handleSubmit={handleSubmit}
      formFooter={
        <Typography sx={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <span>
            <Link
              href="/auth/signup"
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Sign up
            </Link>
          </span>
        </Typography>
      }
    >
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
          autoFocus
          required
          fullWidth
          variant="outlined"
          color={emailError ? 'error' : 'primary'}
          sx={{ ariaLabel: 'email' }}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
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

export default SignInForm;

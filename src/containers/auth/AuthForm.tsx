'use client';
import { FormEvent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@/components/Button';
import Typography from '@mui/material/Typography';
import { AuthCardStyled, AuthContainerStyled } from '@/containers/auth/style';
import theme from '@/assets/theme/theme';

interface IAuthFormProps {
  title: string;
  formErrorMessage: string;
  children?: ReactNode;
  handleSubmit: ((event: FormEvent<HTMLFormElement>) => void) | undefined;
  formFooter: ReactNode;
  formLoading: boolean;
}

const AuthForm = ({
  title,
  children,
  handleSubmit,
  formFooter,
  formErrorMessage,
  formLoading,
}: IAuthFormProps) => {
  return (
    <AuthContainerStyled direction="column" justifyContent="space-between">
      <AuthCardStyled variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(1.5rem, 10vw, 2rem)' }}
        >
          {title}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          {children}
          {formErrorMessage && (
            <Typography sx={{ color: theme.palette.error.main }}>
              {formErrorMessage}
            </Typography>
          )}

          <Button
            loading={formLoading}
            sx={{ mt: 4 }}
            size={'small'}
            type="submit"
            variant={'primary-filled'}
          >
            {title}
          </Button>
          {formFooter}
        </Box>
      </AuthCardStyled>
    </AuthContainerStyled>
  );
};

export default AuthForm;

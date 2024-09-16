import { ReactNode, Suspense } from 'react';
import theme from '@/assets/theme/theme';
import { ThemeProvider } from '@mui/material/styles';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Suspense>{children}</Suspense>
    </ThemeProvider>
  );
}

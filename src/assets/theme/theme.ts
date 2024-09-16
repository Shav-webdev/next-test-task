'use client';

import { createTheme, Theme } from '@mui/material';

import palette from './palette';
import shadows from './shadows';
import typography from './typography';
import {
  buttonBaseThemeOverrides,
  buttonThemeOverrides,
} from '@/components/Button/styles';

export const appTheme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    fontSize: 14,
    htmlFontSize: 16,
    ...typography,
  },
  shadows,
}) as Theme;

const theme = createTheme(appTheme, {
  components: {
    MuiButton: buttonThemeOverrides(),
    MuiButtonBase: buttonBaseThemeOverrides(),
  },
});

export const dashboardTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;

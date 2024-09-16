'use client';

import React from 'react';

import {
  ButtonProps as MuiButtonProps,
  Typography,
  useTheme,
} from '@mui/material';

import { CircularProgress } from '../CircularProgress';
import {
  PrimaryFilled,
  PrimaryLink,
  SecondaryFilled,
  SecondaryLink,
} from './styles';
import Link from 'next/link';

export type ButtonVariant =
  | 'primary-filled'
  | 'secondary-filled'
  | 'primary-link'
  | 'secondary-link';
export type ButtonSize = 'small' | 'large';
export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = 'primary-filled',
    size,
    loading,
    ...rest
  } = props;

  const theme = useTheme();

  switch (variant) {
    case 'primary-filled':
      return (
        <PrimaryFilled
          {...rest}
          className={`app-button ${className}  ${size}`}
          variant="contained"
        >
          {loading ? (
            <CircularProgress
              size={size === 'small' ? 20 : 24}
              progressBgColor={theme.palette.grey.main}
            />
          ) : (
            <Typography
              variant={size !== 'small' ? 'main_button' : 'small_button'}
            >
              {children}
            </Typography>
          )}
        </PrimaryFilled>
      );
    case 'secondary-filled':
      return (
        <SecondaryFilled
          {...rest}
          className={`app-button ${className}  ${size}`}
          variant="contained"
        >
          {loading ? (
            <CircularProgress
              size={size === 'small' ? 20 : 24}
              progressBgColor={theme.palette.grey.main}
            />
          ) : (
            <Typography
              variant={size !== 'small' ? 'main_button' : 'small_button'}
            >
              {children}
            </Typography>
          )}
        </SecondaryFilled>
      );
    case 'primary-link':
      return (
        <PrimaryLink
          LinkComponent={Link}
          {...rest}
          className={`app-button ${className}`}
          variant="text"
        >
          {loading ? (
            <CircularProgress size={size === 'small' ? 20 : 24} />
          ) : (
            <Typography
              variant={size !== 'small' ? 'main_button' : 'small_button'}
            >
              {children}
            </Typography>
          )}
        </PrimaryLink>
      );
    case 'secondary-link':
      return (
        <SecondaryLink
          {...props}
          LinkComponent={Link}
          className={`app-button ${className}`}
          variant="text"
        >
          {loading ? (
            <CircularProgress
              progressBgColor={theme.palette.grey[900]}
              size={size === 'small' ? 20 : 24}
            />
          ) : (
            <Typography
              variant={size !== 'small' ? 'main_button' : 'small_button'}
            >
              {children}
            </Typography>
          )}
        </SecondaryLink>
      );
    default:
      return (
        <PrimaryFilled
          {...props}
          className={`app-button ${className}  ${size}`}
          variant="outlined"
        >
          {loading ? (
            <CircularProgress size={size === 'small' ? 20 : 24} />
          ) : (
            <Typography
              variant={size !== 'small' ? 'main_button' : 'small_button'}
            >
              {children}
            </Typography>
          )}
        </PrimaryFilled>
      );
  }
}

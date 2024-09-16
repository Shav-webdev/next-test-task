'use client';
import { ForwardedRef, forwardRef } from 'react';

import {
  TextFieldProps,
  Typography,
  InputProps as MuiInputProps,
} from '@mui/material';

import { InputLabel, OutlinedInput, TextFieldWrapper } from './styles';

export interface InputProps extends MuiInputProps {
  ref?: ForwardedRef<HTMLInputElement>;
  label?: string;
}

export type InputPropType = InputProps & Omit<TextFieldProps, 'label'>;

export const Input = forwardRef<HTMLInputElement, InputPropType>(
  (props, ref) => {
    const { label, endAdornment, ...rest } = props;

    return (
      <TextFieldWrapper>
        {label ? (
          <InputLabel>
            <Typography variant="p7_medium">{label}</Typography>
          </InputLabel>
        ) : null}
        <OutlinedInput
          {...rest}
          inputRef={ref}
          slotProps={{
            input: {
              endAdornment,
            },
          }}
          variant="outlined"
        />
      </TextFieldWrapper>
    );
  },
);

Input.displayName = 'Input';

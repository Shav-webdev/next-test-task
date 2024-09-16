'use client';

import {
  CircularProgressProps,
  CircularProgress as MuiCircularProgress,
} from '@mui/material';

import { SimpleCircularProgressWrapper } from './styles';

const CIRCLE_PROGRESS_THICKNESS = 4;

export interface SimpleCircularProgressProps extends CircularProgressProps {
  progressBgColor?: string;
}
export function CircularProgress(props: SimpleCircularProgressProps) {
  const { size, className, value, variant, progressBgColor } = props;

  return (
    <SimpleCircularProgressWrapper
      className={`${className} circular-progress`}
      progressBgColor={progressBgColor}
      size={size}
    >
      <MuiCircularProgress
        className="filled"
        thickness={CIRCLE_PROGRESS_THICKNESS}
        size={size}
        variant={variant}
        value={value}
      />
    </SimpleCircularProgressWrapper>
  );
}

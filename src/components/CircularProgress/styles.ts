import styled from '@emotion/styled';
import { circularProgressClasses } from '@mui/material';

import { SimpleCircularProgressProps } from './index';

export const SimpleCircularProgressWrapper = styled.div<
  Partial<SimpleCircularProgressProps>
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;

  .${circularProgressClasses.root} {
    color: ${({ progressBgColor, theme }) =>
      progressBgColor || theme.palette.primary.main};
  }

  & .${circularProgressClasses.circle} {
    stroke-linecap: round;
  }
`;

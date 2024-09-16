import styled from '@emotion/styled';
import {
  Button,
  buttonClasses,
  ButtonProps,
  type Components,
  type Theme,
} from '@mui/material';

const BUTTON_PROPS = {
  small: {
    height: 32,
  },
  large: {
    height: 40,
  },
};

export const buttonThemeOverrides = (): Components<
  Omit<Theme, 'components'>
>['MuiButton'] => ({
  defaultProps: {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
  },
});

export const buttonBaseThemeOverrides = (): Components<
  Omit<Theme, 'components'>
>['MuiButtonBase'] => ({
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
});

const StyledCommonButton = styled(Button)<ButtonProps>`
  text-transform: initial;
  border-radius: ${({ theme }) => theme.shape.borderRadius * 2}px;

  &.small {
    height: ${BUTTON_PROPS.small.height}px;
    padding: ${({ theme }) => theme.spacing(2, 5)};
  }

  &.large {
    height: ${BUTTON_PROPS.large.height}px;
    padding: ${({ theme }) => theme.spacing(7, 6)};
  }

  & > span {
    font-weight: 600;
  }

  & .${buttonClasses.startIcon} {
    margin-left: 0;
  }
`;

const FilledButton = styled(StyledCommonButton)<ButtonProps>`
  &.${buttonClasses.disabled} {
    background-color: ${({ theme }) => theme.palette.grey[300]};
    color: ${({ theme }) => theme.palette.grey.main};
  }
`;

export const PrimaryFilled = styled(FilledButton)<ButtonProps>`
  color: ${({ theme }) => theme.palette.grey.main};

  &:hover {
    box-shadow: none;
    background-color: ${({ theme }) => theme.palette.primary[500]};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.primary[600]};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.primary[300]};
  }
`;

export const SecondaryFilled = styled(FilledButton)<ButtonProps>`
  color: ${({ theme }) => theme.palette.grey.main};
  background-color: ${({ theme }) => theme.palette.grey[900]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[700]};

    box-shadow: none;
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.grey[600]};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.grey[300]};
  }
`;

const LinkButton = styled(StyledCommonButton)<ButtonProps>`
  padding: 0;
  background-color: transparent;

  &.${buttonClasses.disabled} {
    color: ${({ theme }) => theme.palette.grey[300]};
  }
`;

export const PrimaryLink = styled(LinkButton)<ButtonProps>`
  color: ${({ theme }) => theme.palette.primary.main};

  &:hover {
    color: ${({ theme }) => theme.palette.primary[500]};
    background-color: transparent;
  }

  &:active {
    color: ${({ theme }) => theme.palette.primary[600]};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.primary[300]};
  }
`;

export const SecondaryLink = styled(LinkButton)<ButtonProps>`
  color: ${({ theme }) => theme.palette.grey[900]};

  &:hover {
    color: ${({ theme }) => theme.palette.grey[700]};
    background-color: transparent;
  }

  &:active {
    color: ${({ theme }) => theme.palette.grey[600]};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.primary[300]};
  }
`;

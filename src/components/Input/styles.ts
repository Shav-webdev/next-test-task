import styled from '@emotion/styled';
import {
  formHelperTextClasses,
  inputBaseClasses,
  outlinedInputClasses,
  TextField,
} from '@mui/material';

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .${formHelperTextClasses.root} {
    margin: ${({ theme }) => theme.spacing(1, 0, 0, 0)};
  }
`;

export const OutlinedInput = styled(TextField)`
  & .${outlinedInputClasses.root} {
    padding: ${({ theme }) => theme.spacing(0, 3)};

    border-radius: ${({ theme }) => theme.shape.borderRadius * 2}px;

    background-color: ${({ theme }) => theme.palette.grey[50]};
    color: ${({ theme }) => theme.palette.grey[900]};

    & .icon {
      color: ${({ theme }) => theme.palette.grey[400]};
      &.clickable {
        cursor: pointer;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[100]};

      & .${outlinedInputClasses.notchedOutline} {
        border: 1px solid ${({ theme }) => theme.palette.grey[200]};
      }
    }

    &.${outlinedInputClasses.focused} {
      & .${outlinedInputClasses.notchedOutline} {
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
      }
    }

    &.${outlinedInputClasses.error} {
      & .${outlinedInputClasses.notchedOutline} {
        border: 1px solid ${({ theme }) => theme.palette.error.main};
      }
    }

    &.${outlinedInputClasses.disabled} {
      color: ${({ theme }) => theme.palette.grey[600]};
      background-color: ${({ theme }) => theme.palette.grey[100]};

      & .${outlinedInputClasses.notchedOutline} {
        border: 1px solid ${({ theme }) => theme.palette.grey[50]};
      }

      & .icon {
        color: ${({ theme }) => theme.palette.grey[300]};
        cursor: default;
      }
    }

    &.${inputBaseClasses.readOnly} {
      color: ${({ theme }) => theme.palette.grey[700]};

      & .${outlinedInputClasses.notchedOutline} {
        border: 1px solid ${({ theme }) => theme.palette.grey[300]};
      }
    }
  }

  & .${outlinedInputClasses.input} {
    padding: ${({ theme }) => theme.spacing(1.5, 1)};

    font-size: 14px;
    line-height: 16px;
  }

  & .${outlinedInputClasses.notchedOutline} {
    border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  }
`;

export const InputLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.palette.grey[700]};
`;

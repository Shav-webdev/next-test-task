import styled from '@emotion/styled';
import {
  Pagination,
  paginationClasses,
  paginationItemClasses,
  touchRippleClasses,
} from '@mui/material';

const PAGINATION_PROPS = {
  height: 28,
  width: 28,
};

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background-color: ${({ theme }) => theme.palette.grey.main};
  padding: ${({ theme }) => theme.spacing(2.5, 3)};
  border-top: 1px solid ${({ theme }) => theme.palette.grey[200]};
`;

export const PaginationStyled = styled(Pagination)`
  &.${paginationClasses.root} {
    & .${paginationClasses.ul} {
      & .${paginationItemClasses.root} {
        height: ${PAGINATION_PROPS.height}px;
        min-height: ${PAGINATION_PROPS.height}px;
        width: ${PAGINATION_PROPS.width}px;
        min-width: ${PAGINATION_PROPS.width}px;

        padding: ${({ theme }) => theme.spacing(1.5, 2)};
        margin: ${({ theme }) => theme.spacing(0, 0.5)};

        border-radius: ${({ theme }) => theme.spacing(1.5)};

        color: ${({ theme }) => theme.palette.grey[600]};

        &:not(.${paginationItemClasses.ellipsis}):hover {
          background-color: ${({ theme }) => theme.palette.grey[100]};
        }

        &.${paginationItemClasses.disabled} {
          opacity: 1;
          color: ${({ theme }) => theme.palette.grey[300]};
        }

        &.${paginationItemClasses.selected} {
          color: ${({ theme }) => theme.palette.grey[900]};
          background-color: ${({ theme }) => theme.palette.grey[200]};
        }
      }

      & .${touchRippleClasses.root} {
        display: none;
      }
    }
  }
`;
export const RowCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-grow: 1;

  color: ${({ theme }) => theme.palette.grey[900]};
`;

export const NumberFieldWrapper = styled.div`
  max-width: 80px;
  width: 100%;
  margin-inline-start: ${({ theme }) => theme.spacing(0.5)};
`;

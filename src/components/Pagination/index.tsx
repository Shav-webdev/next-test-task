import React from 'react';
import { Typography } from '@mui/material';
import { PaginationStyled, PaginationWrapper, RowCountWrapper } from './style';

export interface PaginationProps {
  page?: number;
  count: number;
  boundaryCount?: number;
  siblingCount?: number;
  rowsTotalCount: number;
  rowsPerPageLabel?: string;
  rowsPerPage: number;
  onChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const {
    page = 1,
    count,
    boundaryCount = 1,
    siblingCount = 1,
    rowsPerPageLabel = 'Per page:',
    rowsPerPage,
    rowsTotalCount,
    onChange,
  } = props;
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <PaginationWrapper>
      <RowCountWrapper>
        <Typography variant="p6_regular" whiteSpace="nowrap" color="grey.700">
          {rowsPerPageLabel}
        </Typography>
        <Typography variant="p6_regular" color="grey.700">
          {rowsPerPage}
        </Typography>
        <Typography variant="p6_regular" whiteSpace="nowrap" color="grey.700">
          Page
        </Typography>
        <Typography variant="p6_regular" color="grey.700">
          {page}
        </Typography>
        <Typography variant="p6_regular" color="grey.700">
          of
        </Typography>
        <Typography variant="p6_regular" color="grey.700">
          {rowsTotalCount}
        </Typography>
      </RowCountWrapper>
      <PaginationStyled
        page={page}
        count={count}
        shape="rounded"
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        onChange={handleChange}
      />
    </PaginationWrapper>
  );
}

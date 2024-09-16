'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Grid } from '@mui/system';
import { Input } from '@/components/Input';
import SearchIcon from '@mui/icons-material/Search';
import { debounce, InputAdornment, useTheme } from '@mui/material';

interface IBreweriesFiltersProps {
  handleSearch: (search: string) => void;
}

const BreweriesFilters = ({ handleSearch }: IBreweriesFiltersProps) => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (search) return;
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, search, searchParams]);

  const debouncedCall = useMemo(() => {
    return debounce((searchDebounce: string) => {
      if (!searchDebounce) return;
      handleSearch(searchDebounce);
    }, 1000);
  }, [handleSearch]);

  const debouncedApiCall = useCallback(debouncedCall, [debouncedCall]);

  const handleChange = (searchText: string) => {
    setSearch(searchText);
    debouncedApiCall(searchText);
  };

  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 1, sm: 3 }}>
        <Input
          placeholder={'Search brewery'}
          onChange={(e) => handleChange(e.target.value)}
          value={search}
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ color: theme.palette.grey[700] }} />
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  );
};

export default BreweriesFilters;

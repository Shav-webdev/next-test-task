'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Grid } from '@mui/system';
import Box from '@mui/material/Box';
import AppCard from '@/components/Card';
import { Pagination } from '@/components/Pagination';
import { IBrewery, IBreweryListMeta } from '../../types';
import FetchDataApi from '@/service/api/FetchDataApi';
import BreweriesFilters from '@/containers/BreweriesFilters';
import { CircularProgress } from '@/components/CircularProgress';

interface ExpertListProps {
  breweries: IBrewery[];
  breweriesListMeta: IBreweryListMeta;
}

const BreweriesList: React.FC<ExpertListProps> = ({
  breweries: initialBreweries,
  breweriesListMeta,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const searchQuery = searchParams.get('search');

  const [queryParam, setQueryParam] = useState(searchParams.toString());
  const [breweries, setBreweries] = useState(initialBreweries);
  const [current, setCurrent] = useState<number>(1);
  const [totalBreweries, setTotalBreweries] = useState(breweriesListMeta.total);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!page) return;
    setCurrent(Number(page));
  }, [page]);

  const handleSearch = async (search: string) => {
    const params = new URLSearchParams(searchParams);
    setCurrent(1);
    params.set('search', `${search}`);
    router.push(`${pathname}?${params.toString()}`);
  };

  const fetchBreweries = useCallback(async () => {
    try {
      setLoading(true);
      const breweriesResponse = (await new FetchDataApi(`/breweries`)
        .setQueryParam('page', `${current}`)
        .setQueryParam('per_page', `12`)
        .fetch()) as unknown as Response;
      const metaResponse = (await new FetchDataApi(`/breweries/meta`)
        .setQueryParam('params', `${current}`)
        .setQueryParam('per_page', `12`)
        .fetch()) as unknown as Response;

      const breweries: IBrewery[] = await breweriesResponse.json();
      const meta = await metaResponse.json();

      setBreweries(breweries);
      setTotalBreweries(meta.total);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [current]);

  const fetchBreweriesBySearch = useCallback(
    async (search: string) => {
      try {
        setLoading(true);
        const breweriesResponse = (await new FetchDataApi(`/breweries/search`)
          .setQueryParam('query', `${search}`)
          .setQueryParam('page', `${current}`)
          .setQueryParam('per_page', `12`)
          .fetch()) as unknown as Response;
        const breweries: IBrewery[] = await breweriesResponse.json();
        setLoading(false);
        setBreweries(breweries);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    },
    [current],
  );

  useEffect(() => {
    if (searchParams.toString() !== queryParam) {
      setQueryParam(searchParams.toString());
      setLoading(true);
      if (!page) {
        setCurrent(1);
      }

      if (searchQuery) {
        void fetchBreweriesBySearch(searchQuery);
      } else {
        void fetchBreweries();
      }
    }
  }, [
    fetchBreweries,
    fetchBreweriesBySearch,
    page,
    queryParam,
    searchParams,
    searchQuery,
  ]);

  const onChange = async (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', `${page}`);

    router.push(`${pathname}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrent(page);
  };

  return (
    <Box sx={{ padding: 4, marginTop: 2 }}>
      <Box sx={{ mb: 4 }}>
        <BreweriesFilters handleSearch={handleSearch} />
      </Box>
      <Grid container spacing={{ xs: 8 }}>
        {loading ? (
          <CircularProgress />
        ) : breweries.length > 0 ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 4 }}
            columns={{ xs: 1, sm: 4, md: 12 }}
          >
            {breweries.map((brewery) => (
              <Grid key={brewery.id} size={{ xs: 1, sm: 6, md: 6, lg: 3 }}>
                <AppCard brewery={brewery} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid>No breweries found</Grid>
        )}

        <Box sx={{ width: '100%' }}>
          <Pagination
            page={current}
            count={Math.ceil(
              breweriesListMeta.total / breweriesListMeta.per_page,
            )}
            rowsTotalCount={totalBreweries}
            rowsPerPage={breweriesListMeta.per_page}
            onChange={onChange}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default BreweriesList;

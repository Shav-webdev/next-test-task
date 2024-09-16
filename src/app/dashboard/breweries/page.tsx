import { PageProps } from '../../../types';
import BreweriesList from '@/containers/BreweriesList';
import { getBreweriesPageData } from '@/service/data/breweries';

export default async function BreweriesPage({ searchParams }: PageProps) {
  const { breweriesList, breweriesListMeta } =
    await getBreweriesPageData(searchParams);

  return (
    <BreweriesList
      breweries={breweriesList}
      breweriesListMeta={breweriesListMeta}
    />
  );
}

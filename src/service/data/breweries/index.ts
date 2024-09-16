import FetchDataApi from '@/service/api/FetchDataApi';
import { IBrewery, IBreweryListMeta, ISearchParams } from '../../../types';

async function getBreweries(page: string = '1') {
  try {
    const getBreweriesResponse = (await new FetchDataApi(`/breweries`)
      .setQueryParam('per_page', '12')
      .setQueryParam('page', page)
      .fetch()) as unknown as Response;
    return await getBreweriesResponse.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSingleBrewery(id: string) {
  try {
    const getBreweriesResponse = (await new FetchDataApi(
      `/breweries/${id}`,
    ).fetch()) as unknown as Response;
    return await getBreweriesResponse.json();
  } catch (error) {
    console.error(error);
  }
}

async function getBreweriesListMeta(page: string = '1') {
  try {
    const getBreweriesResponse = (await new FetchDataApi(`/breweries/meta`)
      .setQueryParam('per_page', '12')
      .setQueryParam('page', page)
      .fetch()) as unknown as Response;
    return await getBreweriesResponse.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getBreweriesPageData(
  searchParams: ISearchParams,
): Promise<{
  breweriesList: IBrewery[];
  breweriesListMeta: IBreweryListMeta;
}> {
  const { page } = searchParams;
  const breweriesList: IBrewery[] = await getBreweries(page);
  const breweriesListMeta: IBreweryListMeta = await getBreweriesListMeta(page);

  return {
    breweriesList,
    breweriesListMeta,
  };
}

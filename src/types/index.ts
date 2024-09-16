export interface AuthUserLogin {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}
export interface AuthUserRegister extends AuthUserLogin {
  name: FormDataEntryValue | null;
}

export interface IUser {
  email: string;
  name: string;
}

export interface IBrewery {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export interface IBreweryListMeta {
  total: number;
  page: number;
  per_page: number;
}

export interface ISearchParams {
  [key: string]: string | undefined;
}

export interface IRequestBody {
  [key: string]: string | undefined;
}

export type PageProps = {
  params: { slug: string };
  searchParams: ISearchParams;
};

export interface IRequestError {
  data: {
    message: string;
  };
}

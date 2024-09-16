import { IRequestBody } from '../../types';

class FetchDataApi {
  private baseUrl = process.env.OPEN_BREWERY_API_URL;
  private url: URL;
  private method: string = 'GET';
  private headers: HeadersInit | undefined = undefined;
  private body: IRequestBody | null = null;
  private revalidate: number = 3600;
  private queryParams: URLSearchParams = new URLSearchParams();

  constructor(baseUrl: string) {
    this.url = new URL(`${this.baseUrl}${baseUrl}`);
  }

  setQueryParam(key: string, value: string): FetchDataApi {
    this.queryParams.set(key, value);
    return this;
  }

  async fetch(): Promise<unknown> {
    this.url.search = this.queryParams.toString();

    const options: RequestInit = {
      method: this.method,
      headers: this.headers,
      body: this.body ? JSON.stringify(this.body) : undefined,
    };

    if (this.revalidate) {
      options.next = { revalidate: this.revalidate };
    }

    return await fetch(this.url.toString(), options);
  }
}

export default FetchDataApi;

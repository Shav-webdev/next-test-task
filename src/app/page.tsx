import { redirect } from 'next/navigation';
import appConfig from '@/config/app.config';

const homepageUrl: string = appConfig.homepageUrl;

export default function Home() {
  redirect(homepageUrl);
}

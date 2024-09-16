'use client';
import {
  ReactNode,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { dashboardTheme } from '@/assets/theme/theme';
import { AuthContext } from '@/providers/AuthProvider';
import { AppProvider } from '@toolpad/core/AppProvider';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Session, Router, Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
  {
    segment: '/dashboard/breweries',
    title: 'Breweries',
    icon: <SportsBarIcon />,
  },
];

export default function DashboardLayoutAccount({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const { user, signOut } = useContext(AuthContext);
  const [session, setSession] = useState<Session | null>({
    user: {
      name: user?.name,
      email: user?.email,
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  useEffect(() => {
    if (!user?.email || !user.name) return;

    setSession({
      user: {
        name: user?.name,
        email: user?.email,
        image: 'https://avatars.githubusercontent.com/u/19550456',
      },
    });
  }, [user?.name, user?.email]);

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: user?.name,
            email: user?.email,
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
        void signOut();
      },
    };
  }, [user?.name, user?.email, signOut]);

  const [pagePath, setPagePath] = useState(pathname);

  const router = useMemo<Router>(() => {
    return {
      pathname: pagePath,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPagePath(String(path)),
    };
  }, [pagePath]);

  return (
    <AppProvider
      branding={{
        title: 'xData Group',
      }}
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={dashboardTheme}
    >
      <DashboardLayout>
        <Suspense>{children}</Suspense>
      </DashboardLayout>
    </AppProvider>
  );
}

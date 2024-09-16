'use client';
import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import InternalApi from '@/service/api/InternalApi';
import { AuthUserLogin, AuthUserRegister, IUser } from '../types';
import appConfig from '@/config/app.config';

type AuthContextType = {
  user?: IUser;
  loadingUser: boolean;
  signup: (authData: AuthUserRegister) => Promise<void>;
  signIn: (authData: AuthUserLogin) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  loadingUser: true,
  signup: async () => {},
  signIn: async () => {},
  signOut: async () => {},
});

const homepageUrl: string = appConfig.homepageUrl;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loadingUser, setLoadingUser] = useState(true);
  const router = useRouter();

  const pathname = usePathname();

  const fetchUser = async (redirectAfterSuccessAuth: boolean = true) => {
    try {
      const userNameFromCookie = Cookies.get('name')!;
      const userEmailFromCookie = Cookies.get('email')!;

      setUser({
        name: userNameFromCookie,
        email: userEmailFromCookie,
      });
      setLoadingUser(false);

      if (redirectAfterSuccessAuth) {
        window.location.href = homepageUrl;
      }
    } catch (error) {
      setUser(undefined);
      setLoadingUser(false);
      Cookies.remove('accessToken');
      Cookies.remove('userData');
    }
  };

  useEffect(() => {
    void fetchUser(false);
  }, [pathname]);

  const signup = async (authData: AuthUserRegister) => {
    setLoadingUser(true);
    const response = await InternalApi.post('/auth/signup', authData);
    setLoadingUser(false);
    if (response.data.created) {
      router.replace('/auth/signin');
    }
  };

  const signIn = async (authData: AuthUserLogin) => {
    const response = await InternalApi.post('/auth/signin', authData);
    const resData = await response.data;
    const { token, name, email } = response.data;

    Cookies.set('accessToken', token, {
      expires: appConfig.cookiesExpirePeriod,
    });

    Cookies.set('name', name, {
      expires: appConfig.cookiesExpirePeriod,
    });

    Cookies.set('name', email, {
      expires: appConfig.cookiesExpirePeriod,
    });

    await fetchUser();
    return resData;
  };

  const signOut = async () => {
    Cookies.remove('accessToken');
    Cookies.remove('name');
    Cookies.remove('email');
    router.replace('/auth/signin');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        signup,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

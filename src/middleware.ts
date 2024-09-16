import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  const cookies = request.cookies;
  const accessToken = cookies.get('accessToken')?.value;
  const name = cookies.get('name')?.value;
  const email = cookies.get('email')?.value;
  const isAuthRoute = pathname.startsWith('/auth/');

  if (accessToken) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    response.cookies.set('accessToken', accessToken, {
      path: '/',
      expires: expirationDate,
    });

    if (name) {
      response.cookies.set('name', name, {
        path: '/',
        expires: expirationDate,
      });
    }

    if (email) {
      response.cookies.set('email', email, {
        path: '/',
        expires: expirationDate,
      });
    }

    if (isAuthRoute || pathname === '/' || pathname === '/dashboard') {
      return NextResponse.redirect(
        new URL('/dashboard/breweries', request.url),
      );
    }
  }

  // Protect all private pages, redirect to sign in page
  if (!isAuthRoute && !accessToken) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*'],
};

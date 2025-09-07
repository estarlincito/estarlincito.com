import 'server-only';

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];

export const getUserLocale = (req: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return match(languages, locales, 'en');
};

export const handleLocale = (req: NextRequest) => {
  const { pathname, search } = req.nextUrl;
  const pathSegments = pathname.split('/').filter(Boolean);
  let locale = null;
  const firstSeg = pathSegments[0] as string;
  const hasLocale = locales.includes(firstSeg);
  const res = NextResponse.next();
  res.headers.set('x-pathname', req.nextUrl.pathname);

  //
  const cookieLocale = req.cookies.get('locale')?.value;
  if (cookieLocale) {
    locale = cookieLocale;

    if (firstSeg !== locale && locales.includes(firstSeg)) {
      res.cookies.set('locale', firstSeg);
    }
  } else {
    const userLocale = getUserLocale(req);
    locale = userLocale;
    res.cookies.set('locale', userLocale);
  }

  //
  if (!hasLocale) {
    const targetUrl = new URL(`/${locale}${pathname}`, req.url);
    targetUrl.search = search;
    return NextResponse.redirect(targetUrl);
  }

  return res;
};

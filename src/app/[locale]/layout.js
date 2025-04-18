import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import { Noto_Sans_Thai } from "next/font/google";

import { ViewTransitions } from 'next-view-transitions'

const notoSansThai = Noto_Sans_Thai({
  variable: "--noto-sans-thai",
  subsets: ["latin"],
  display: 'swap', 
});
 
export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <ViewTransitions>
      <html lang={locale}>
        <body className={`${notoSansThai.variable} antialiased`}>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
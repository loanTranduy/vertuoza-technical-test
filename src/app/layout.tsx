import type { Metadata } from 'next';
import './globals.css';
import ApolloClientProvider from '@/app/lib/graphql/ApolloClientProvider';
import { Toaster } from '@/components/ui/toaster';
import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Loan Tran Duy - Vertuoza Technical test',
  description: 'I hope we will work together',
  authors: [{ name: 'Loan Tran Duy' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <ApolloClientProvider>
          <div className="container mx-auto p-4 mt-9 z-10 relative">
            <main>{children}</main>
          </div>
          <Toaster />
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  );
}

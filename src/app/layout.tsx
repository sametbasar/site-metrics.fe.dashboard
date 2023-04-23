import { Inter } from 'next/font/google';

import Header from '@/features/ui/header';
import '@/styles/app.scss';

export const metadata = {
  title: 'Site Metrics App',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}

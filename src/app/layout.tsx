import { Suspense } from 'react';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[#141414] text-white scrollbar-hide'>
        <Suspense fallback={<div>Carregando...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}

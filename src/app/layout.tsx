import "./globals.css";
import { Karla } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

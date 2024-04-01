import { ThemeProvider } from '@/components/providers/theme-provider';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '知境',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="zhijing-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

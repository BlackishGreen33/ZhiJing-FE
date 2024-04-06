import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import './globals.scss';

import { ImageProvider } from '@/components/providers/image-provider';
import { ButtonProvider } from '@/components/providers/message-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';

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
          <ButtonProvider>
            <ImageProvider>{children}</ImageProvider>
          </ButtonProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

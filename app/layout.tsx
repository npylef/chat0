import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'katex/dist/katex.min.css';
import { Toaster } from '@/frontend/components/ui/sonner';
import { ThemeProvider } from '@/frontend/components/ui/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { IOSInstallPrompt } from '@/frontend/components/IOSInstallPrompt';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chat0',
  description: 'Fastest AI Chat App',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
          <IOSInstallPrompt />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

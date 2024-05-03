import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['thai'],
  display: 'swap',
  variable: "--prompt-thai-font",
});

export const metadata: Metadata = {
  title: "Youth for Next Step",
  description: "Next Step Never Stop",
  icons: {
    icon: '/logo/logo_mark.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={prompt.className}>
        <div className="bg-slate-100">
          {children}
        </div>
        </body>
    </html>
  );
}

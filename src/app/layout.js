import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@/context/UserContext';

const inter = Inter({
  subsets: ['latin'], // Specify the subsets you want
  variable: '--font-inter', // Optional: custom CSS variable for the font
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CinéIA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable}`}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}

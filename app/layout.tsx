import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlpacaGPT",
  description: "A helpful assistant designed to help you navigate through the Alpaca API documentation.",
  icons: {
    icon: "/alpaca.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/alpaca.svg" alt="Alpaca Markets Logo" />
      </body>
    </html>
  );
}

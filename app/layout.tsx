import { ContextProvider } from "@/lib/context";
import "./globals.css";
import { Inter, Montserrat_Alternates } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mont = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <html lang="en" className={`${inter.variable} ${mont.variable}`}>
        <body>{children}</body>
      </html>
    </ContextProvider>
  );
}

import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "./providers";
import { defaultFontMapper } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const title = "Simple Notepad";
const description =
  "Quickly jot down and save your notes hassle-free. This easy-to-use notepad keeps your thoughts organized and always accessible.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@1oyibo",
  },
  metadataBase: new URL("https://tiki-notepad.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

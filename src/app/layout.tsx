import type { Metadata } from "next";
import "./globals.css";
import '../../public/assets/fontawesome/css/fontawesome.min.css';
import '../../public/assets/fontawesome/css/regular.min.css';
import '../../public/assets/fontawesome/css/solid.min.css';
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "Markdown Previewer",
  icons: {
    icon: '/display-solid.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
    <body>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </body>
    </html>
  );
}

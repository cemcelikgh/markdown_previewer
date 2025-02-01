import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "Markdown Previewer",
  icons: {
    icon: 'display-solid.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="/fontawesome/css/fontawesome.min.css" />
      <link rel="stylesheet" href="/fontawesome/css/regular.min.css" />
      <link rel="stylesheet" href="/fontawesome/css/solid.min.css" />
    </head>
    <body>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </body>
    </html>
  );
}

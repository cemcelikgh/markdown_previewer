import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Markdown Previewer",
  description: "Patika Intermediate Frontend Web Development Path Certification Task",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/fontawesome/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/fonts/fontawesome/css/regular.min.css" />
        <link rel="stylesheet" href="/fonts/fontawesome/css/solid.min.css" />
      </head>
      <body>
      <StoreProvider>
        {children}
      </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;

import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import "../../public/fonts/fontawesome/css/fontawesome.min.css";
import "../../public/fonts/fontawesome/css/regular.min.css";
import "../../public/fonts/fontawesome/css/solid.min.css";
import "./globals.css";

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
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;

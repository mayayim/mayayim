import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "maya yim",
  description: "maya yim — interdisciplinary designer + product manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}

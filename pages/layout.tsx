import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="w-screen min-h-screen bg-gray-100">
          <main className="m-auto bg-white max-w-screen-2xl">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}

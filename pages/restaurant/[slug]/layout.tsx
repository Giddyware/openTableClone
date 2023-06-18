import React from "react";
import Header from "./components/Header";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="flex items-start justify-between w-2/3 m-auto 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
